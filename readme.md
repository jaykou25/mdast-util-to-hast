# mdast-util-to-hast-wrap-removed

folked from [mdast-util-to-hast](https://github.com/syntax-tree/mdast-util-to-hast)

## 起因

正常情况下 mdast 转成 hast 时, 该库会在某些节点间加入空白换行节点.

比如下面这段 markdown 文字:

`Hi there! \n\n This is weapp-markdown`

它的 mdast 是:

```js
{
  type: 'root',
  children: [
    {
      type:"paragraph",
      children: [
        {
          type: 'text',
          value: 'Hi there!'
        }
      ]
    },
    {
      type:"paragraph",
      children: [
        {
          type: 'text',
          value: 'This is weapp-markdown'
        }
      ]
    }
  ]
}
```

原库转译成 hast 是:

```js
{
  type: 'root',
  children: [
    {
      type: 'element',
      tagName: 'p',
      children: [
        {
          type: 'text',
          value: 'Hi there!'
        }
      ]
    },
    {
      type: 'text',
      value: '\n'
    },
    {
      type: 'element',
      tagName: 'p',
      children: [
        {
          type: 'text',
          value: 'This is weapp-markdown'
        }
      ]
    }
  ]
}
```

在转换过程中, 它会在两个段落间加入 `{ type: 'text', value: '\n'}` 换行节点.

这些换行节点在 html 中是不会有影响的, 因为默认情况下 html 的 white-space 值是 normal, 代表它会忽略这个换行符.

但是我在使用 hast 树在小程序页面中渲染会时, 换行符就会产生影响.

所以本库对原库进行了修改, 目的是想去掉这些换行节点.

## 测试

测试用例单独写在 my-test 文件夹中. 运行脚本 `npm run my-test`
