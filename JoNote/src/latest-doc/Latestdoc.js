import React, {Component} from 'react';
import {Avatar, List} from 'antd';
import Icon from "antd/es/icon/index";

const data = [
    {
        title: 'proxy.md',
        icon:'file-markdown',
        createtime:'2018-04-19',
        filesize:'80b',
    },
    {
        title: 'proxy.txt',
        icon:'file-text',
        createtime:'2018-04-19',
        filesize:'80b',
    },
    {
        title: 'proxy',
        icon:'file-unknown',
        createtime:'2018-04-19',
        filesize:'80b',
    },
    {
        title: 'proxy.pdf',
        icon:'file-pdf',
        createtime:'2018-04-19',
        filesize:'80b',
    },
    {
        title: 'proxy.doc',
        icon:'file-word',
        createtime:'2018-04-19',
        filesize:'80b',
    },
    {
        title: 'proxy.xls',
        icon:'file-excel',
        createtime:'2018-04-19',
        filesize:'80b',
    },
    {
        title: 'proxy.jpg',
        icon:'file-jpg',
        createtime:'2018-04-19',
        filesize:'80b',
    },
    {
        title: 'proxy.ppt',
        icon:'file-ppt',
        createtime:'2018-04-19',
        filesize:'80b',
    },
];

class Latestdoc extends Component{
    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item actions={[<Icon type="share-alt" />, <Icon type="download" />,<Icon type="delete" />]}  >
                        <List.Item.Meta
                            avatar={<Avatar icon={item.icon} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}/>}
                            title={item.title}
                            description={[<span  key={item.createtime}>{item.createtime}</span>,<span style={{marginLeft:'15px'}}  key={item.filesize}>{item.filesize}</span>]}
                        />
                    </List.Item>
                )}
            />
                )
    }
}
export default Latestdoc;