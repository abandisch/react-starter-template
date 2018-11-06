import * as React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import { IRootState } from '../../lib/types'
import TopBar from '../ui/TopBar'
import 'bootstrap/dist/css/bootstrap.min.css'

interface IApp {
  onGetMockData: () => void
}

type IAppProps = IApp & IRootState['mockData']

export class App extends React.Component<IAppProps> {

  componentDidMount () {
    const { onGetMockData } = this.props
    onGetMockData()
  }

  render () {
    const { api, data } = this.props
    return (
      <React.Fragment>
        <header>
          <TopBar />
        </header>
        <Container>
          <Row className='mt-5'>
            <Col>
              <p>To get started, edit <code>src/components/App/index.tsx</code> and save to reload.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Data: {api.requesting ? <span><em>Getting data ...</em></span> : <code>{data}</code>} </p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: IRootState) => {
  const { api, data } = state.mockData
  return {
    api,
    data
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetMockData: () => dispatch.mockData.getMockData()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
