import assert from 'node:assert/strict'
import test from 'node:test'
import {h} from 'hastscript'
import {toHast} from '@jay.kou/mdast-util-to-hast'

test('list', async function (t) {
  await t.test('should remove wrap node', async function () {
    assert.deepEqual(
      toHast({
        type: 'list',
        ordered: true,
        children: [
          {
            type: 'listItem',
            children: [
              {type: 'paragraph', children: [{type: 'text', value: 'alpha'}]}
            ]
          }
        ]
      }),
      h('ol', [h('li', 'alpha')])
    )
  })
})
