---
title: "Java基础"
description: "Java 是一种广泛使用的面向对象的编程语言。"
pubDate: "2024-12-06 17:37:48"
category: "interview"
cardImage: "@images/banners/java基础.jpg"
cardImage2: "@images/banners/java基础.jpg"
tags: ["面试"]
selected: false
---

## 目录

## Java 是什么？
Java 是一种广泛使用的面向对象的编程语言，由 Sun Microsystems 在 1995 年开发，现在由 Oracle 公司维护。Java 以其“一次编写，到处运行”的特性而闻名，这得益于其跨平台的虚拟机（JVM）。
## Java 的主要特点是什么？
- 面向对象：Java 是一种纯面向对象的语言。
- 平台独立性：Java 代码可以在任何安装了 JVM 的平台上运行。
- 安全性：Java 提供了多种安全机制，如字节码验证、沙箱环境等。
- 健壮性：Java 强制进行错误检查，如强制类型转换、异常处理等。
- 多线程：Java 支持多线程编程，可以实现并发执行。
- 可移植性：Java 代码可以在不同的硬件和操作系统上运行。
- 高性能：JVM 使用即时编译（JIT）技术，提高了代码的执行效率。
## Java 中的基本数据类型有哪些？
- byte：8位有符号整数。
- short：16位有符号整数。
- int：32位有符号整数。
- long：64位有符号整数。
- float：32位单精度浮点数。
- double：64位双精度浮点数。
- char：16位 Unicode 字符。
- boolean：布尔类型，只有 true 和 false 两个值。
## Java 中的包装类是什么？
包装类是将基本数据类型封装成对象的类。每个基本数据类型都有一个对应的包装类，例如 Integer 对应 int，Double 对应 double 等。
## Java 中的字符串是什么？
字符串在 Java 中是一个对象，由 String 类表示。字符串是不可变的，即一旦创建，其内容不能被修改。
## Java 中的异常处理机制是什么？
Java 使用 try-catch-finally 结构来处理异常。try 块中放置可能抛出异常的代码，catch 块捕获并处理异常，finally 块无论是否发生异常都会执行。
## Java 中的接口和抽象类有什么区别？
Java 中的接口和抽象类都用于实现抽象概念，但它们之间有一些重要的区别：

### 1. 定义方式
- **接口**：使用 `interface` 关键字定义，所有方法默认都是 `public abstract`，所有字段默认都是 `public static final`。
- **抽象类**：使用 `abstract class` 关键字定义，可以包含抽象方法和具体方法。

### 2. 继承和实现
- **接口**：一个类可以实现多个接口，使用 `implements` 关键字。
- **抽象类**：一个类只能继承一个抽象类，使用 `extends` 关键字。

### 3. 方法实现
- **接口**：接口中的方法默认都是抽象的，没有方法体。从 Java 8 开始，接口可以包含默认方法（`default`）和静态方法（`static`）。
- **抽象类**：抽象类可以包含抽象方法（没有方法体）和具体方法（有方法体）。

### 4. 构造器
- **接口**：接口不能有构造器。
- **抽象类**：抽象类可以有构造器，用于初始化成员变量。

### 5. 成员变量
- **接口**：接口中的变量默认是 `public static final`，即常量。
- **抽象类**：抽象类中的变量可以是任何访问修饰符（`private`、`protected`、`public`），也可以是常量或实例变量。

### 6. 实现难度
- **接口**：实现接口的类必须实现接口中所有的抽象方法。
- **抽象类**：子类可以选择性地实现抽象类中的抽象方法，也可以直接使用抽象类中的具体方法。

### 7. 用途
- **接口**：主要用于定义行为规范，多个类可以实现同一个接口，表示它们具有某种共同的行为。
- **抽象类**：主要用于提供部分实现，子类可以继承抽象类并扩展其功能。

### 示例代码

#### 接口示例
```java
public interface Animal {
    void eat();
    void sleep();

    default void move() {
        System.out.println("Moving...");
    }
}
```

#### 抽象类示例
```java
public abstract class Vehicle {
    protected String color;

    public Vehicle(String color) {
        this.color = color;
    }

    public abstract void start();

    public void stop() {
        System.out.println("Stopping the vehicle...");
    }
}
```

接口：接口是一种完全抽象的类，包含常量和抽象方法。一个类可以实现多个接口。
抽象类：抽象类可以包含抽象方法和具体方法。一个类只能继承一个抽象类。
## Java 中的集合框架是什么？
### Java 中的集合框架

Java 集合框架（Java Collections Framework, JCF）是一组预定义的接口和类，用于存储和操作对象集合。集合框架提供了丰富的数据结构和算法，使得管理和操作数据更加方便和高效。

#### 主要接口

1. **List**
   - **特点**：有序集合，允许重复元素。
   - **常用实现类**：
     - `ArrayList`：基于动态数组实现，支持快速随机访问，但插入和删除操作较慢。
     - `LinkedList`：基于双向链表实现，支持快速插入和删除操作，但随机访问较慢。
     - `Vector`：类似于 `ArrayList`，但线程安全，性能较低。
   - **ArrayList 与 LinkedList 对比**：
    ##### 1. 内部实现

  - **ArrayList**
    - 基于动态数组实现。
    - 底层使用一个 Object 数组来存储元素。
    - 当数组容量不足时，会自动扩容。

  - **LinkedList**
    - 基于双向链表实现。
    - 每个元素（节点）包含前驱节点和后继节点的引用。
    - 不需要连续的内存空间。

  ##### 2. 访问元素

  - **ArrayList**
    - 支持快速随机访问，时间复杂度为 O(1)。
    - 可以通过索引直接访问元素。

  - **LinkedList**
    - 不支持快速随机访问，时间复杂度为 O(n)。
    - 需要从头节点或尾节点开始遍历，直到找到目标节点。

  ##### 3. 插入和删除元素

  - **ArrayList**
    - 插入和删除操作需要移动大量元素，时间复杂度为 O(n)。
    - 在数组中间插入或删除元素时，需要将后续元素向前或向后移动。

  - **LinkedList**
    - 插入和删除操作非常快，时间复杂度为 O(1)。
    - 只需更改相邻节点的引用即可完成操作。

  ##### 4. 内存使用

  - **ArrayList**
    - 内存使用相对紧凑，因为只需要连续的内存空间。
    - 扩容时可能会浪费一些内存，因为需要预留额外的空间。

  - **LinkedList**
    - 内存使用相对较多，因为每个节点除了存储数据外，还需要存储前后节点的引用。
    - 但不需要连续的内存空间，因此在内存碎片较多的情况下表现更好。

  ##### 5. 适用场景

  - **ArrayList**
    - 适用于频繁的随机访问和遍历操作。
    - 适用于数据量较小且不需要频繁插入和删除的场景。

  - **LinkedList**
    - 适用于频繁的插入和删除操作。
    - 适用于数据量较大且需要频繁插入和删除的场景。


2. **Set**
   - **特点**：无序集合，不允许重复元素。
   - **常用实现类**：
     - `HashSet`：基于哈希表实现，不保证元素的顺序。
     - `LinkedHashSet`：基于哈希表和链表实现，保证插入顺序。
     - `TreeSet`：基于红黑树实现，元素按自然顺序或自定义排序。

3. **Queue**
   - **特点**：先进先出（FIFO）的数据结构，用于处理队列操作。
   - **常用实现类**：
     - `LinkedList`：实现了 `Queue` 接口，支持队列操作。
     - `PriorityQueue`：基于优先堆实现，元素按优先级排序。

4. **Deque**
   - **特点**：双端队列，支持两端的插入和删除操作。
   - **常用实现类**：
     - `ArrayDeque`：基于数组实现，性能较高。
     - `LinkedList`：实现了 `Deque` 接口，支持双端队列操作。

5. **Map**
   - **特点**：键值对映射，键唯一。
   - **常用实现类**：
     - `HashMap`：基于哈希表实现，不保证键值对的顺序。
     - `LinkedHashMap`：基于哈希表和链表实现，保证插入顺序。
     - `TreeMap`：基于红黑树实现，键按自然顺序或自定义排序。
     - `Hashtable`：类似于 `HashMap`，但线程安全，性能较低。

#### 主要工具类

1. **Collections**
   - 提供了一系列静态方法，用于操作集合，如排序、查找、填充等。
   - **常用方法**：
     - `sort(List<T> list)`：对列表进行排序。
     - `reverse(List<T> list)`：反转列表中的元素。
     - `shuffle(List<T> list)`：随机排列列表中的元素。
     - `max(Collection<T> coll)`：返回集合中的最大元素。
     - `min(Collection<T> coll)`：返回集合中的最小元素。

2. **Arrays**
   - 提供了一系列静态方法，用于操作数组，如排序、查找、填充等。
   - **常用方法**：
     - `sort(T[] a)`：对数组进行排序。
     - `binarySearch(T[] a, T key)`：在已排序的数组中进行二分查找。
     - `asList(T... a)`：将数组转换为列表。


## Java 中的多线程是什么？
### 线程与进程

在计算机科学中，线程和进程是两个基本的概念，它们在多任务处理和并发编程中起着重要作用。下面是线程和进程的主要区别和特点：

#### 1. 定义

- **进程**：
  - 进程是操作系统进行资源分配和调度的基本单位。
  - 每个进程拥有独立的地址空间，包括代码段、数据段、堆栈等。
  - 进程之间的切换开销较大，因为需要保存和恢复大量的状态信息。

- **线程**：
  - 线程是进程内的一个执行单元，是操作系统进行 CPU 调度的基本单位。
  - 同一进程内的线程共享进程的地址空间和其他资源，如内存、文件句柄等。
  - 线程之间的切换开销较小，因为它们共享大部分状态信息。

#### 2. 资源共享

- **进程**：
  - 每个进程有自己的独立内存空间，进程间的数据交换需要通过进程间通信（IPC）机制，如管道、消息队列、共享内存等。
  - 进程间的资源隔离较好，一个进程的崩溃不会影响其他进程。

- **线程**：
  - 同一进程内的线程共享内存空间，可以直接访问同一进程中的数据。
  - 线程间的通信更简单，可以通过共享变量或对象直接进行数据交换。
  - 一个线程的崩溃可能会导致整个进程崩溃，因为它们共享相同的资源。

#### 3. 创建和销毁

- **进程**：
  - 创建和销毁进程的开销较大，因为需要分配和释放独立的内存空间和其他资源。
  - 创建新进程通常涉及复制父进程的地址空间，这是一个耗时的操作。

- **线程**：
  - 创建和销毁线程的开销较小，因为它们共享进程的资源。
  - 创建新线程只需分配少量的栈空间和线程控制块（TCB）。

#### 4. 调度

- **进程**：
  - 操作系统调度的是进程，每次切换进程都需要保存和恢复大量的状态信息。
  - 进程调度的粒度较大，适合处理大规模的任务。

- **线程**：
  - 操作系统调度的是线程，线程切换的开销较小，因为它们共享大部分状态信息。
  - 线程调度的粒度较小，适合处理细粒度的任务和并发操作。

#### 5. 适用场景

- **进程**：
  - 适用于需要高度隔离和资源保护的场景。
  - 适用于需要独立运行的大型应用程序，如数据库服务器、Web 服务器等。

- **线程**：
  - 适用于需要高并发和低延迟的场景。
  - 适用于需要频繁交互和数据共享的应用程序，如多线程 Web 应用、图形界面应用等。

#### 示例代码

##### 创建进程（Java 中实现 `Runnable`）
```java
class MyRunnable implements Runnable {
    public void run() {
        // 线程执行的代码
        System.out.println("线程正在运行");
    }
}

public class Main {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();
    }
}
```

##### 创建进程（Java 中实现 `Callable`）
```java
import java.util.concurrent.Callable;
import java.util.concurrent.FutureTask;
class MyCallable implements Callable<Integer> {
    @Override
    public Integer call() throws Exception {
        // 线程执行的代码以及可能返回的结果
        return 123;
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        FutureTask<Integer> futureTask = new FutureTask<>(new MyCallable());
        Thread thread = new Thread(futureTask);
        thread.start();
        // 获取线程执行结果
        System.out.println(futureTask.get());
    }
}
```

##### 创建线程（Java 中使用 `Thread` 类）
```java
public class ThreadExample {
    public static void main(String[] args) {
        Thread thread = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Thread: " + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        thread.start();

        for (int i = 0; i < 5; i++) {
            System.out.println("Main: " + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### 总结

- **进程**：独立的执行环境，资源隔离好，适用于需要高度隔离和资源保护的场景。
- **线程**：轻量级的执行单元，资源共享好，适用于需要高并发和低延迟的场景。

## Java 中的垃圾回收机制是什么？
垃圾回收（Garbage Collection, GC）是 JVM 自动管理内存的一种机制，它会自动回收不再使用的对象所占用的内存。


End
