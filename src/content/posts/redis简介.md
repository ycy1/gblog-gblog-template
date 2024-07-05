---
title: "Redis 简介"
description: "Redis（Remote Dictionary Server）是一个开源的、基于内存的键值对存储系统，广泛应用于高性能缓存、消息中间件、会话共享等场景"
pubDate: "2024-07-05 13:00:00"
category: "datastorage"
cardImage: "@images/banners/redis简介.png"
cardImage2: "@images/banners/redis简介.png"
tags: ["Redis"]
selected: true
---

Redis（Remote Dictionary Server）是一个开源的、基于内存的键值对存储系统，广泛应用于高性能缓存、消息中间件、会话共享等场景。它是一个NoSQL数据库，支持多种数据结构，如字符串、哈希表、列表、集合、有序集合等。

## Redis 数据类型
- string（字符串）: 基本的数据存储单元，可以存储字符串、整数或者浮点数。
- hash（哈希）:一个键值对集合，可以存储多个字段。
- list（列表）:一个简单的列表，可以存储一系列的字符串元素。
- set（集合）:一个无序集合，可以存储不重复的字符串元素。
- zset(sorted set：有序集合): 类似于集合，但是每个元素都有一个分数（score）与之关联。
- 位图（Bitmaps）：基于字符串类型，可以对每个位进行操作。
- 超日志（HyperLogLogs）：用于基数统计，可以估算集合中的唯一元素数量。
- 地理空间（Geospatial）：用于存储地理位置信息。
- 发布/订阅（Pub/Sub）：一种消息通信模式，允许客户端订阅消息通道，并接收发布到该通道的消息。
- 流（Streams）：用于消息队列和日志存储，支持消息的持久化和时间排序。
- 模块（Modules）：Redis 支持动态加载模块，可以扩展 Redis 的功能。

-- -
## Redis 安装
Windows 下安装
下载地址：https://github.com/tporadowski/redis/releases

Redis支持 32位和64位这个需要根据你系统平台的实际情况选择，这里我们下载Redis-x64-xxx.msi安装到redis自定义盘。
![alt text](/src/images/postsimg/redisimage.png)
1. 启动 Redis 服务
![alt text](/src/images/postsimg/redisimage2.png)
![alt text](/src/images/postsimg/redisimage3.png)


切换到 redis 目录下运行:
```sh
redis-cli.exe -h 127.0.0.1 -p 6379
```
```sh
set my_key 'test' # 设置键值对
```
```sh
get my_key  # 取出键值对
```
![alt text](/src/images/postsimg/imageredis4.png)

## SpringBoot Redis 
1. 引入依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```
2. 配置Redis连接池
```java
@Configuration
@EnableCaching
@AutoConfigureBefore(RedisAutoConfiguration.class)
public class RedisConfig extends CachingConfigurerSupport
{
    @Bean
    @SuppressWarnings(value = { "unchecked", "rawtypes" })
    public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory connectionFactory)
    {
        RedisTemplate<Object, Object> template = new RedisTemplate<>();
        template.setConnectionFactory(connectionFactory);
        FastJson2JsonRedisSerializer serializer = new FastJson2JsonRedisSerializer(Object.class);

        // 使用StringRedisSerializer来序列化和反序列化redis的key值
        template.setKeySerializer(new StringRedisSerializer());
        template.setValueSerializer(serializer);

        // Hash的key也采用StringRedisSerializer的序列化方式
        template.setHashKeySerializer(new StringRedisSerializer());
        template.setHashValueSerializer(serializer);

        template.afterPropertiesSet();
        return template;
    }
}
```

End

<font size=3 >来源： *[菜鸟教程 - Redis教程](https://www.runoob.com/redis/redis-tutorial.html)*</font>
