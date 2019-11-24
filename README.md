# react-awtk

这个项目的目的是为[awtk](https://github.com/zlgopen/awtk.git)写一个react渲染器。

# 注意

由于 quickjs 对于 js 支持的比较好。所以，前期的开发只在 [awtk-quickjs](https://github.com/zlgopen/awtk-quickjs.git) 中进行。

# 存在的问题

- 修改了 awtk-quickjs 源码。添加了 std 和 os 库。但是 os.setTimeout. 不起作用。
    - 测试了 quickjs 本身。 os.setTimeout 不起作用。

# 目标

- target_1
```jsx
 <Window
    // ref = { this.winRef }
    x="0" y="0" w="0" h="0"
>
    <Button
        // parent = {this.winRef.current}
        text = { "wenyufei" }
        x="0" y="0" w="0" h="0"
        tk_style = {{
            selfLayoutParams:{
                x:"center",
                y:"middle",
                w:"50%",
                h:"30"
            },
        }}
    />
    <Button
        name="open:dialog1"
        style="round"
        enable_long_press="true"
        x="c" y="10" w="128" h="30"
        text="Long Press"
        onPress = {
            (e)=>{
                console.log(e)
            }
        }
    />
</Window>
```
