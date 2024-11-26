---
title: "mysql-存储过程"
description: "存储过程（Stored Procedure）是一种在数据库中存储复杂程序，以便外部程序调用的一种数据库对象。"
pubDate: "2024-06-26 11:22:42"
category: "datastorage"
cardImage: "@images/banners/mysql-存储过程.jpg"
cardImage2: "@images/banners/mysql-存储过程.jpg"
tags: ["MySQL"]
selected: true
---

## 目录

## 存储过程 简介
&emsp;&emsp; MySQL 5.0 版本开始支持存储过程。
存储过程（Stored Procedure）是一种在数据库中存储复杂程序，以便外部程序调用的一种数据库对象。
存储过程是为了完成特定功能的SQL语句集，经编译创建并保存在数据库中，用户可通过指定存储过程的名字并给定参数(需要时)来调用执行。
存储过程思想上很简单，就是数据库 SQL 语言层面的代码封装与重用。
<br>
<br>
优点:
- 存储过程可封装，并隐藏复杂的商业逻辑。
- 存储过程可以回传值，并可以接受参数。
- 存储过程无法使用 SELECT 指令来运行，因为它是子程序，与查看表，数据表或用户定义函数不同。
- 存储过程可以用在数据检验，强制实行商业逻辑等。
<br>
缺点:
- 存储过程，往往定制化于特定的数据库上，因为支持的编程语言不同。当切换到其他厂商的数据库系统时，需要重写原有的存储过程。
- 存储过程的性能调校与撰写，受限于各种数据库系统。

-- -

## 一、存储过程 创建调用
- 创建
```sql
DELIMITER $$
CREATE PROCEDURE procedure_name (IN t_id INTEGER)
BEGIN
  -- 存储过程的 SQL 语句;
  select * from tb_user where id = t_id;
END $$
DELIMITER ;
```
- 调用

```sql
CALL procedure_name(8)
```
- 删除
```sql
DROP PROCEDURE procedure_name;
```
- 修改
```sql
--  ALTER PROCEDURE MySQL 5.7.6以后支持
DELIMITER $$
ALTER PROCEDURE procedure_name (IN t_id INTEGER)
BEGIN
  -- 存储过程的 SQL 语句;
  select * from tb_user where id = t_id;
END $$
```
```sql
-- 先删除，在重新创建
DROP PROCEDURE procedure_name;
CREATE PROCEDURE procedure_name (IN t_id INTEGER)
...
```


## 二、存储过程 参数
```sql
CREATE PROCEDURE 存储过程名([[IN |OUT |INOUT ] 参数名 数据类形...])
```
- IN 输入参数：表示调用者向过程传入值（传入值可以是字面量或变量）
- OUT 输出参数：表示过程向调用者传出值(可以返回多个值) <font color="red">注意：（传出值只能是变量）例param2</font>
- INOUT 输入输出参数：既表示调用者向过程传入值，又表示过程向调用者传出值（值只能是变量）

举个🌰
```sql
DELIMITER $$
create procedure test_proc (IN param INTEGER, OUT param2 VARCHAR(50))
BEGIN
	select username from tb_user where id = param;
	set param2 = 'test';
	select param2;
END$$
DELIMITER ;

set @param2 = 'ces';
CALL test_proc(8, @param2);
```

## 三、存储过程 变量

```sql
DECLARE variable_name [,variable_name...] datatype [DEFAULT value];

select '哈哈' into @vb;
select @vb  -- 输出：哈哈

DELIMITER $$
create procedure test_variable ()
BEGIN
	DECLARE vb2 varchar(50);  
	set vb2 = 22;
	select vb2;
END$$
DELIMITER ;

call test_variable() -- 输出：22
```
## 四、存储过程的控制语句

- IF...THEN...ELSE...END IF
```sql
DELIMITER $$
create PROCEDURE test_kz(IN p1 INTEGER, OUT p2 VARCHAR(50))
BEGIN
	IF p1 >=100  THEN
		set p2 = '优秀';
	ELSEIF p1 <80 and p1>=60 THEN
		set p2= '良好';
	ELSE
		set p2 = '及格';
	END IF;

	SELECT p2;
END $$
CHARACTER SET utf8   -- 设置存储过程的编码格式

DELIMITER ;

set @p2= '测试';
call test_kz(70, @p2);  -- 良好
```

- WHILE...DO...END WHILE
```sql
DELIMITER $$
create PROCEDURE test_while(IN p1 INTEGER, IN p2 VARCHAR(50))
BEGIN
  DECLARE i INTEGER;
  SET i = 0;
  WHILE i < p1 DO
    SET i = i + 1;
    SET p2 = CONCAT(p2, i);
	END while;  
	SELECT p2;
END $$
DELIMITER ;

set @p2= '测试';
call test_while(10, @p2); -- 测试12345678910
```
End

<font size=3 >来源： *[菜鸟教程 - MySQL存储过程](https://www.runoob.com/w3cnote/mysql-stored-procedure.html)*</font>
