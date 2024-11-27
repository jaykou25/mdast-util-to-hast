import assert from 'node:assert/strict'
import test from 'node:test'
import {h} from 'hastscript'
import {toHast} from '@jay.kou/mdast-util-to-hast'

test('root', async function (t) {
  await t.test('should remove wrap node ', async function () {
    assert.deepEqual(
      toHast({
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Hi there!'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'This is weapp-markdown'
              }
            ]
          }
        ]
      }),
      h(null, [h('p', 'Hi there!'), h('p', 'This is weapp-markdown')])
    )
  })
})
