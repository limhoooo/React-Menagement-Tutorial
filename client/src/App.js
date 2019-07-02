import React,{Component} from 'react';
import Customer from '../src/components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  },
  back:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
})

const customers = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name' :'임호동',
  'birthday':'19941108',
  'gender':'man',
  'job':'백수1'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name' :'김하이',
  'birthday':'19941108',
  'gender':'man',
  'job':'백수2'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name' :'박바이',
  'birthday':'19941108',
  'gender':'man',
  'job':'백수3'
},
]

class App extends Component {

  // constructor(props){
  //   super(props)

  //   this.state={
  //     name :'홍길동',
  //     birthday:'19941108',
  //     gender:'man',
  //     job:'백수'
  //   }
  // }

  render(){
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        
          
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>생년월일</TableCell>
                  <TableCell>생일</TableCell>
                  <TableCell>직업</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {customers.map(c => {
                    return(
                        <Customer
                        key={c.id}
                        id={c.id}
                        image={c.image}
                        name={c.name}
                        birthday={c.birthday}
                        gender={c.gender}
                        job={c.job}
                      />
                      )
                      })}
              </TableBody>
              
            </Table>
            
         
        
      </Paper>
    )
  }
}


export default withStyles(styles)(App);
