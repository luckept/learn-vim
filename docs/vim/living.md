# 走出舒适区，存活下来

习得 Vim，是一种高回报的体验，效率提升，只是副产品，谨以此库沉淀记录 Vim 的学习

本教程仅用于个人回顾，所以将不优先照顾纯新手及 Windows 系统，同时对于部分有学习成本的命令我将直接略过，后续酌情增补

或者你也可以参加催学社组织的[键盘侠养成训练营计划](https://learn.cuixueshe.com/p/t_pc/goods_pc_detail/goods_detail/course_2Eo5kBtrovv2UqWVy75SmYZP6UM?app_id=appewiejl9g3764)来获取更贴心的服务

# 初始台地

### 第一步 - 安装 VSCode Vim 插件
  
  * 在扩展商店中搜索 `vim` 即可傻瓜式安装

### 第二步 - 了解 vim 光标的三种模式
  
  * **NORMAL**
    
    当 `vim` 插件成功安装后，编辑器将默认在此模式下，从其他模式切换回 `NORMAL` 模式可以通过按键 `ESC` 或者组合按键 `CTRL + [` 来实现
    
    此模式下不能直接键入字符，你所有的输入将被认为是在触发快捷功能，例如你可以通过 `hjkl` 来移动光标等
        
  * **INSERT**
           
    INSERT 模式下，可以输入字符，你可以进行正常的代码编写，进入该模式需要使用按键 `i` 或 `a`，这两个按键的区别在于，前者进入 `INSERT` 模式后，光标会出现在 `NORMAL` 模式包裹的字符左侧，后者反之。我个人的记忆方式是将 `a` 看作 `after`
        
  * **VISUAL**
    
    VISUAL 模式，英译后为视觉模式，它的存在是用来替代鼠标的选取效果，过去通过鼠标左键框选大段文本的操作，如今则利用 VISUAL 模式加上 `hjkl` 移动来实现。进入此模式需使用按键 `v`

### 第三步 - 降低 VScode 中键盘默认的按键延迟，实现光标快速移动

  * 如果是第一次使用 `vim` 插件，没有在 VScode 中做过任何配置，你会发现按键无法长按，如果你想快速移动光标，就只能加速按键，这显然是很痛苦的，下面是配置的流程
    
    **一、在终端中依次执行以下 5 条命令，分行复制回车即可**
      ```shell
        defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false
        defaults write com.microsoft.VSCodeInsiders ApplePressAndHoldEnabled -bool false
        defaults write com.visualstudio.code.oss ApplePressAndHoldEnabled -bool false
        defaults write com.microsoft.VSCodeExploration ApplePressAndHoldEnabled -bool false
        defaults delete -g ApplePressAndHoldEnabled
      ```
    
    **二、修改 Mac 系统设置中的键盘设置**
      
      * 将 `按键重复` 和 `重复前延迟` 的滑块全部滑动到最右侧
    
    **三、重启 Vscode，即可享受丝滑的键入体验了**
