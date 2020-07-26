import React, {Component} from 'react'

// Este é um exemplo de Simple Component
const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

  const TableBody = () => {
    return (
      <tbody>
        <tr>
          <td>Charlie</td>
          <td>Janitor</td>
        </tr>
        <tr>
          <td>Mac</td>
          <td>Bouncer</td>
        </tr>
        <tr>
          <td>Dee</td>
          <td>Aspiring actress</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>Bartender</td>
        </tr>
      </tbody>
    )
  }

  // Este é um exemplo de Class Component. Class e Simple components podem ser mistrurados.
class Table extends Component {
    render() {
      return (
        <table>
            <TableHeader />
            <TableBody />
        </table>
      )
    }
  }
  
  export default Table