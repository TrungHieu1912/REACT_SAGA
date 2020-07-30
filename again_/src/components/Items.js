import React, { Component } from 'react';
import { Button, Table, Input, Row, Col, Space, Divider } from 'antd';
import './style.css';
const { Column } = Table;
class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "",
                number: "",
                class: ""
            },
            dataUpdate: {
                name: "",
                number: "",
                class: ""
            },
            dataSearch: "",
            
        }
    }
    handleChange() {
        this.props.addItem(this.state.data)
    }
    handleInputChange(event) {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }
    view_f() {
        console.log('view')
    }
    update_f(item) {
        this.setState({
            dataUpdate: item
        })
    }
    test_(){

    }
    render() {
        let listData = this.props.items;
        console.log('listData', listData)
        console.log('log',this.state.dataUpdate);
        const style = { paddingLeft: '20px' };
        const style_1 = { display: 'flex', justifyContent: 'start', fontWeight: 'bold', }

        return (

            <div className="ctn_form_">
                <div className="form_">
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                        Công cụ
                    </Divider>
                    <Row gutter={16} style={style}>
                        <Col className="gutter-row" style={{ minWidth: '150' }}>
                            <div style={style_1}>Thêm tên</div>
                            <div ><Input name='name'
                                value={this.state.data.name}
                                onChange={(event) => this.handleInputChange(event)} className="input_" /></div>
                        </Col>
                        <Col className="gutter-row" style={{ minWidth: '150' }}>
                            <div style={style_1}>Thêm số</div>
                            <div ><Input name='number'
                                value={this.state.data.number}
                                onChange={(event) => this.handleInputChange(event)} className="input_" /></div>
                        </Col>
                        <Col className="gutter-row" style={{ minWidth: '150' }}>
                            <div style={style_1}>Thêm lớp</div>
                            <div ><Input name='class'
                                value={this.state.data.class}
                                onChange={(event) => this.handleInputChange(event)} className="input_" /></div>
                        </Col>
                        <Col className="gutter-row" style={{ minWidth: '150' }}>
                            <div>&nbsp;</div>
                            <div ><Button type="primary"
                                onClick={() => this.handleChange()}>Thêm Item</Button></div>
                        </Col>
                        {/* ----------------------------------------------------------------------------------------- */}
                        <Col className="gutter-row" style={{ minWidth: '150' }}>
                            <div>&nbsp;</div>
                            <div ><Input name='class' className="input_" value={this.state.dataSearch} onChange={(e) => this.setState({ dataSearch: e.target.value })} /></div>

                        </Col>
                        <Col className="gutter-row" style={{ minWidth: '150' }}>
                            <div>&nbsp;</div>
                            <div ><Button type="primary" onClick={() => this.props.searchDispatch(this.state.dataSearch)}>Tìm kiếm</Button></div>
                        </Col>
                    </Row>
                    {/* ----------------------------------------------------------------------------------------- */}
                    <Row gutter={16} style={style}>
                        <Col className="gutter-row" style={{ minWidth: '150' }}>
                            <div style={style_1}>Sửa tên</div>
                            <div ><Input name='name' className="input_"
                                value={this.state.dataUpdate.name}
                                onChange={(e) => this.setState({ dataUpdate: { ...this.state.dataUpdate, name: e.target.value } })}
                            /></div>
                        </Col>
                        <Col className="gutter-row" style={{ minWidth: '150' }}>
                            <div style={style_1}>Sửa số</div>
                            <div ><Input name='number' className="input_"
                                value={this.state.dataUpdate.number}
                                onChange={(e) => this.setState({ dataUpdate: { ...this.state.dataUpdate, number: e.target.value } })}
                            /></div>
                        </Col>
                        <Col className="gutter-row" style={{ minWidth: '150' }}>
                            <div style={style_1}>Sửa lớp</div>
                            <div ><Input name='class' className="input_"
                                value={this.state.dataUpdate.class}
                                onChange={(e) => this.setState({ dataUpdate: { ...this.state.dataUpdate, class: e.target.value } })}
                            /></div>
                        </Col>
                        <Col className="gutter-row" style={{ minWidth: '150' }}>
                            <div >&nbsp;</div>
                            <div ><Button type="primary"
                            //   onClick={() => this.props.updateDispatch(this.state.dataUpdate)}
                                onClick={() => {
                                    this.props.updateDispatch(this.state.dataUpdate)
                                    this.test_()
                                }}
                            >Sửa</Button></div>
                        </Col>
                    </Row>

                </div>
                <div>&nbsp;</div>
                <div className="form_1">
                    <div className="main_table">
                        {/* //------------------------------ */}
                        <Table dataSource={listData} rowKey="id" >
                            <Column title="Id" dataIndex="id" />
                            <Column title="Name" dataIndex="name" />
                            <Column title="Number" dataIndex="number" />
                            <Column title="Class" dataIndex="class" />
                            <Column title="Action" render={(item) => {
                                // giống map() 
                                return (

                                    <Space size="middle">
                                        <Button type="primary" onClick={() => this.view_f()}>view</Button>
                                        <Button type="danger" onClick={() => this.update_f(item)}>update</Button>
                                        <Button type="dark " style={{ backgroundColor: 'green', color: 'white' }} onClick={() => this.props.deleteDispatch(item.id)}>Delete</Button>
                                    </Space>
                                )
                            }}>
                            </Column>
                        </Table>

                    </div>
                </div>

            </div>
        );
    }
}

export default Items;