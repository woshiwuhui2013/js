````
业务流映射
1. 从根节点分层遍历语法树的各个节点
2. 找到contractdefinitioncontext
3. 获取合约内部的所有语句的语法树节点contractpartcontext
4. 获取合约的变量定义的语法，获取变量定义StateVariableDeclarationContext、EnumDefinitionContext
5. 获取合约里面函数的定义FunctionDefinitionContext
6. 建立函数的跳转关系
  - 约定状态变量：state；状态跳转函数：next_step; 指定入口函数。（这三项通过配置指定）
  - 分析跳转函数next_step,首先遍历函数体内所有StatementContext语法
  - 如果是IfStatementContext,就进一步处理，否则忽略
  - 继续处理if表达式中所有的IfWithBlockContext和ElseWithBlockContext
  - 处理if语句()里面的ExpressionContext，获取存在state变量的判断语句，获取当前state是什么，间接映射当前状态处理函数是什么
  - 处理if {} 代码块里的ExpressionStatementContext,获取state的赋值语句，获取下一步state的赋值，间接映射下一个状态的处理函数是什么
  - 建立state [当前函数， 下一个跳转函数]的多维数组
  - 根据state的多维数组，构建函数的跳转关系


bpmn的xml图标元素类型
1. startEvent
2. userTask
3. exclusiveGateway
4. sequenceFlow
5. scriptTask
6. endEvent
7. regLang
````

