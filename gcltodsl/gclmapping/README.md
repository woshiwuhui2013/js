# GCL代码映射DSL流程图
## 简述
  通过分析gcl代码的语法树，构建gcl代码的调用的流程。通过提取流程的关键信息，构建DSL建模工具xml的文件，最终会在dsl建模工具上可视化的展示gcl的流程。


### 分析过程

#### 函数调用流程分析
   ![alt text](image.png)
   ![alt text](image-1.png)

   FunctionDefinitionContext--->StatementContext--->ExpressStatementContext--->ExpressionContext---->ExpressionContext
   ExpressionStatmentContext 
   ExpresionContext
   PrimaryExpressionContext
   FunctionCallArgumentsContext

   RelayStatementContext


## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Working with Markdown

You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
