import React from 'react';
import './List.less';

class List extends React.Component{
  getList(){
    const arr = [1,2,3,4,5];
    // 以下两种方法都可以，注意有大括号的需要return
    // const list = arr.map((it,index)=> <li key={index}>{it}</li>);
    const list = arr.map((it,index) => {
      return <li key={index}>{it}</li>
    });
    return list;
  }
  render(){
    return <div className="wrap">
      <ul className="box">
      {this.getList()}
      </ul>
    </div>
  }
}

export default List;