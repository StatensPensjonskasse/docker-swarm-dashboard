import { useAtomValue } from 'jotai'
import { Table, Card, Button } from 'react-bootstrap'
import {
  currentVariantAtom,
  currentVariantClassesAtom,
} from '../common/store/atoms'
import jb_square from '../jb_square.svg'
import goLand_icon from '../GoLand_icon.svg'
import webStorm_icon from '../WebStorm_icon.svg'

function AboutComponent() {
  const currentVariant = useAtomValue(currentVariantAtom)
  const currentVariantClasses = useAtomValue(currentVariantClassesAtom)

  return (
    <Card bg={currentVariant} className={currentVariantClasses}>
      <Card.Body>
        <h1>Docker Swarm Dashboard</h1>
        <h2>by heckenmann</h2>
        <Table variant={currentVariant}>
          <tbody>
            <tr>
              <td>License:</td>
              <td>
                <a href="https://github.com/heckenmann/docker-swarm-dashboard/blob/master/LICENSE">
                  https://github.com/heckenmann/docker-swarm-dashboard/blob/master/LICENSE
                </a>
              </td>
            </tr>
            <tr>
              <td>GitHub-Project:</td>
              <td>
                <a href="https://github.com/heckenmann/docker-swarm-dashboard">
                  https://github.com/heckenmann/docker-swarm-dashboard
                </a>
              </td>
            </tr>
            <tr>
              <td>Docker Registry:</td>
              <td>
                <a href="https://github.com/heckenmann/docker-swarm-dashboard/pkgs/container/docker-swarm-dashboard">
                  https://github.com/heckenmann/docker-swarm-dashboard/pkgs/container/docker-swarm-dashboard
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
        <h2>Tools</h2>
        <p>
          Special thanks to JetBrains for supporting this project with{' '}
          <a
            href="https://www.jetbrains.com/community/opensource/#support"
            target="_blank"
          >
            Open Source development licenses
          </a>
          .
        </p>
        <a href="https://www.jetbrains.com/" target="_blank">
          <img
            src={jb_square}
            height="80px"
            alt="JetBrains Black Box Logo logo."
          />
        </a>
        <a href="https://www.jetbrains.com/go/" target="_blank">
          <img src={goLand_icon} height="80px" alt="GoLand logo." />
        </a>
        <a href="https://www.jetbrains.com/webstorm/" target="_blank">
          <img src={webStorm_icon} height="80px" alt="WebStorm logo." />
        </a>
        <h2>Frameworks & Libraries</h2>
        <ul>
          <li>
            <Button
              variant="link"
              target="_blank"
              href="https://getbootstrap.com/"
            >
              Bootstrap
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              target="_blank"
              href="https://fontawesome.com/"
            >
              Fontawesome
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              target="_blank"
              href="https://www.gorillatoolkit.org/"
            >
              Gorilla
            </Button>
          </li>
          <li>
            <Button variant="link" target="_blank" href="https://jotai.org/">
              Jotai
            </Button>
          </li>
          <li>
            <Button variant="link" target="_blank" href="https://reactjs.org/">
              React
            </Button>
          </li>
        </ul>
      </Card.Body>
    </Card>
  )
}

export { AboutComponent }
