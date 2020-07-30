import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { Table } from 'reactstrap';
import './style.css';
class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            dataUpdate : {
                id: 0,
                name: ""
            },
            dataSearch :""
        }
    }
    handleChange() {
        // console.log("state:::", this.state.data);
        this.props.addItem({ name: this.state.data })
    }
    handleInputChange(event) {
        this.setState({
            data: event.target.value
        })
    }
    update_f(item){
        this.setState({
            dataUpdate :item
        })
    }
    render() {
        let listData = [];
        
        if (this.props.items) {
            listData = this.props.items.map((item) => {
                return (
                    <tr key={item.id}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th><Button type="primary" onClick={() => this.update_f(item)}>Sửa </Button>
                        <Button type="primary" onClick={() => this.props.deleteDispatch(item.id)}>xóa </Button></th>
                    </tr>
                )
            })
            
        }
        return (
            <div>
                <div className="grid">
                    
                    <div className="main_table">
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <th>ID của dữ liệu</th>
                                <th>Tên của dữ liệu</th>
                                <th>Action</th>
                            </tr>
                            {listData}
                        </tbody>
                    </Table>
                    </div>
                    <div className="right_">
                        <div className=" input_">
                            <input value={this.state.data} onChange={(event) => this.handleInputChange(event)} />
                            <Button type="primary" onClick={() => this.handleChange()}>Thêm Item</Button>
                        </div>
                        <div>
                            <input value={this.state.dataUpdate.name} onChange={(e) => this.setState({dataUpdate: {...this.state.dataUpdate, name: e.target.value}})}/>
                            <Button type="primary" onClick={() => this.props.updateDispatch(this.state.dataUpdate)}>Update</Button>
                        </div>
                        <div>
                            <input value={this.state.dataSearch} onChange={(e) => this.setState({dataSearch: e.target.value})}/>
                            <Button type="primary" onClick={()=>this.props.searchDispatch(this.state.dataSearch)}>Search</Button>
                        </div>
                        <div>
                            <a href="/items"><Button type="primary" >back</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Items;