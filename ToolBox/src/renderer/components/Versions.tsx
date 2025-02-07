import { Button, Flex } from 'antd'
import { useState } from 'react'

function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <ul className="versions">
      <Flex gap="small" wrap>
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="outlined">
          Outlined
        </Button>
        <Button color="primary" variant="dashed">
          Dashed
        </Button>
        <Button color="primary" variant="filled">
          Filled
        </Button>
        <Button color="primary" variant="text">
          Text
        </Button>
        <Button color="primary" variant="link">
          Link
        </Button>
      </Flex>
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
      <h1 className="text-3xl font-bold underline bg-green-300">Hello world!</h1>
      <li className="test">测试scss</li>
    </ul>
  )
}

export default Versions
