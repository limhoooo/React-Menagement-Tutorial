import React,{Component} from 'react';
import Customer from '../src/components/Customer';
import './App.css';

const customers = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name' :'임호',
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
    return (
      <div>
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
      </div>
    )
  }
}


export default App;
