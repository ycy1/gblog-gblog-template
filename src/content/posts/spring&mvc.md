---
title: "Spring&SpringMVC"
description: "SpringMVC是一个基于Java实现的轻量级Web框架，遵循MVC（模型-视图-控制器）设计模式，主要用于Web开发."
pubDate: "2024-12-26 17:37:48"
category: "interview"
cardImage: "@images/banners/spring&mvc.jpg"
cardImage2: "@images/banners/spring&mvc.jpg"
tags: ["面试"]
selected: false
---

## 目录

以下是关于 Spring 和 SpringMVC 的一些常见面试题，这些问题可以帮助你更好地理解这两个框架的核心概念和使用方法：

## **Spring 框架的核心特性有哪些？**
- **IoC（控制反转）**：通过依赖注入（DI），将对象的创建和依赖关系交给容器管理。
- **AOP（面向切面编程）**：允许开发者定义横切关注点（如日志、事务等），并将其应用到多个组件中。
- **声明式事务管理**：简化了事务处理代码，减少了样板代码。
- **丰富的生态体系**：包括数据访问、Web 开发、消息传递等多个模块。

## **什么是 IoC 容器？它的作用是什么？**
- **IoC 容器**是 Spring 框架的核心组件，负责管理和装配应用程序中的对象。它通过读取配置文件或注解来实例化、配置和组装对象。
- **作用**：减少对象之间的耦合度，提高代码的可测试性和可维护性。

## **Spring 中的 Bean 生命周期有哪些阶段？**
- **实例化**：通过反射创建 Bean 实例。
- **属性赋值**：为 Bean 设置属性值。
- **初始化**：调用 `init-method` 或实现 `InitializingBean` 接口的方法。
- **使用**：Bean 可以被其他 Bean 使用。
- **销毁**：调用 `destroy-method` 或实现 `DisposableBean` 接口的方法。

## **SpringMVC 的工作流程是什么？**

SpringMVC 的工作流程可以通过以下步骤和图表来详细解释。每个步骤都对应着框架中的一个组件，确保请求从客户端发出到响应返回的整个过程都被有序处理。

#### 1. **客户端发送请求**
- 客户端（如浏览器）向服务器发送 HTTP 请求。

#### 2. **前端控制器（DispatcherServlet）接收请求**
- `DispatcherServlet` 是 SpringMVC 的核心组件，它拦截所有进入的 HTTP 请求，并负责将请求分发给合适的处理器（Controller）。

#### 3. **处理器映射器（HandlerMapping）查找处理器**
- `HandlerMapping` 根据 URL 查找对应的处理器（Controller）。它会根据配置或注解确定哪个 Controller 方法应该处理该请求。

#### 4. **处理器适配器（HandlerAdapter）调用处理器**
- `HandlerAdapter` 负责调用处理器（Controller）中的方法。它会根据处理器类型选择合适的方式执行业务逻辑。

#### 5. **处理器（Controller）处理请求**
- 控制器（Controller）执行具体的业务逻辑，并返回一个 `ModelAndView` 对象，其中包含模型数据和视图名称。

#### 6. **视图解析器（ViewResolver）解析视图**
- `ViewResolver` 根据 `ModelAndView` 中的视图名称找到对应的视图资源（如 JSP、Thymeleaf 模板等）。

#### 7. **渲染视图**
- 视图引擎（如 JSP 引擎）将模型数据填充到视图中，生成最终的 HTML 页面或其他格式的响应内容。

#### 8. **响应客户端**
- 最终的响应内容通过 `DispatcherServlet` 返回给客户端。

### 图解流程
![alt](@images/postsimg/springMVC执行流程.png)



## **SpringMVC 中的 DispatcherServlet 是什么？**
- **DispatcherServlet** 是 SpringMVC 的前端控制器，所有的 HTTP 请求都会首先经过它。它负责将请求分发给合适的处理器（Controller），并协调各个组件完成请求处理。

## **SpringMVC 中如何进行表单验证？**
- 使用 **JSR-303 标准**（如 Hibernate Validator）进行表单验证。
- 在 Controller 方法参数上添加 `@Valid` 注解，并在需要验证的字段上添加相应的约束注解（如 `@NotNull`、`@Size` 等）。
- 如果验证失败，SpringMVC 会自动将错误信息封装到 `BindingResult` 对象中，可以通过该对象获取验证结果。

## **SpringMVC 中如何处理异常？**
- 使用 **@ExceptionHandler** 注解标记的方法可以处理特定类型的异常。
- 定义全局异常处理器类，使用 `@ControllerAdvice` 注解，可以在整个应用程序范围内捕获异常。
- 返回自定义的错误页面或 JSON 响应。

## **Spring 和 SpringMVC 的区别是什么？**
- **Spring** 是一个全面的企业级应用开发框架，提供了 IoC 容器、AOP、事务管理等功能。
- **SpringMVC** 是 Spring 框架的一个模块，专注于 Web 应用的开发，提供 MVC 架构的支持，用于处理 HTTP 请求和响应。

## **Spring 中的 AOP 是如何实现的？**
- **AOP** 通过代理机制实现。Spring 支持两种代理方式：
  - **JDK 动态代理**：适用于实现了接口的类。
  - **CGLIB 代理**：适用于没有实现接口的类。
- 切面（Aspect）、连接点（Join Point）、通知（Advice）、切入点（Pointcut）是 AOP 的核心概念。

## **Spring 中的事务管理是如何工作的？**
- **声明式事务管理**：通过 XML 配置或注解（如 `@Transactional`）来管理事务。
- **编程式事务管理**：通过编写代码手动管理事务的开始、提交和回滚。
- 事务传播行为（Propagation Behavior）和隔离级别（Isolation Level）是配置事务的重要属性。

<span style="opacity: 0.5;">这些问题涵盖了 Spring 和 SpringMVC 的基础知识和高级特性，希望对你有所帮助！如果你有更具体的问题或者需要进一步解释，请随时告诉我！</span>

End
