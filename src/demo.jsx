import React, { Component } from 'react'
import UpgradeSelect from './UpgradeSelect'

const options = [{
  label: '类型1',
  value: '1',
  cname: 'leixingyi'
},
{
  label: '类型2',
  value: '2',
  cname: 'leixinger'
},
{
  label: '类型3',
  value: '3',
  cname: 'leixingsan'
},
{
  label: '类型4',
  value: '4',
  cname: 'leixingsi'
}]

export default class Demo extends Component {
  render() {
    return <UpgradeSelect 
      showSearch
      filterkeys={['cname']}
      options={options} 
      style={{width: 100}}
    />
  }
} 