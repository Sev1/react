import React from 'react';
import { List, Card } from 'antd';

  class ItemList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        data:[
          {
            title: 'Title 1',
            text:'内容内容'
          },
          {
            title: 'Title 2',
            text:'Card content'
          },
          {
            title: 'Title 3',
            text:'内容内容'
          },
          {
            title: 'Title 4',
            text:'Card content'
          },
        ]
      }
    }

    render(){
      const {data} = this.state;
      return <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>{item.text}</Card>
          </List.Item>
        )}
      />
    }
  }

  export default ItemList;