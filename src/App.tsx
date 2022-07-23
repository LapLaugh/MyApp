import * as React from 'react';
import BaseComponent from './utils/baseComponent';
import classNamenames from 'classnames';
import "antd/dist/antd.css";
// import DemoComponent from './components/demoComponent';
// import AppHeader from './components/appHeader';
// import AppBody from './components/appBody';
// import AppFooter from './components/appFooter';
import { Carousel } from 'antd';

class App extends BaseComponent<any> {
  state = {
    preferSad: 'Cứ thích buồn đấy, thì làm sao?',
    count: 0,
    ok: false
  }
  noSadHere = () => {
    if (this.state.count == 0) {
      this.setState({
        preferSad: 'Làm gì có chuyện đó, bấm nút phía trên kia kìa!',
        count: 1
      })
    } else if (this.state.count == 1) {
      this.setState({
        preferSad: 'Hôm nay chỉ được bấm nút bên trên thôi!',
        count: 2
      })
    } else {
      this.setState({
        preferSad: 'Bấm nút phía trên thôi mà!',
        count: 1
      })
    }
  }
  ok = () => {
    this.setState({
      ok: true
    })
  }
  render() {
    return (
      <div className={classNamenames('body')}>
        {/* <DemoComponent /> */}
        {/* <AppHeader />
        <AppBody />
        <AppFooter /> */}
        <div className="es-wrapper-color">
          <table className="es-wrapper" width="100%" cellSpacing={0} cellPadding={0}>
            <tbody>
              <tr>
                <td className="esd-email-paddings" valign="top">
                  {/* <table cellPadding={0} cellSpacing={0} className="es-content esd-header-popover" align="center">
                    <tbody>
                      <tr>
                        <td className="esd-stripe" esd-custom-block-id="2431" align="center">
                          <table className="es-content-body" style={{ backgroundColor: 'transparent' }} width="600" cellSpacing={0} cellPadding={0} align="center">
                            <tbody>
                              <tr>
                                <td className="esd-structure es-p15t es-p15b es-p20r es-p20l" align="left">
                                  <table width="560" cellPadding={0} cellSpacing={0}><tr><td width="270" valign="top">
                                    <table className="es-left" cellSpacing={0} cellPadding={0} align="left">
                                      <tbody>
                                        <tr>
                                          <td className="esd-container-frame" width="270" align="left">
                                            <table width="100%" cellSpacing={0} cellPadding={0}>
                                              <tbody>
                                                <tr>
                                                  <td className="es-infoblock esd-block-text" align="left">
                                                    <p>Put your preheader text here</p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td><td width="20"></td><td width="270" valign="top">
                                      <table className="es-right" cellSpacing={0} cellPadding={0} align="right">
                                        <tbody>
                                          <tr>
                                            <td className="esd-container-frame" width="270" align="left">
                                              <table width="100%" cellSpacing={0} cellPadding={0}>
                                                <tbody>
                                                  <tr>
                                                    <td align="right" className="es-infoblock esd-block-text">
                                                      <p><a href="https://viewstripo.email" className="view" target="_blank">View in browser</a></p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td></tr></table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                  <table className="es-content" cellSpacing={0} cellPadding={0} align="center">
                    <tbody>
                      <tr>
                        <td className="esd-stripe" align="center">
                          <table className="es-content-body" style={{ backgroundColor: '#ffffff' }} width="600" cellSpacing={0} cellPadding={0} bgcolor="#ffffff" align="center">
                            <tbody>
                              <tr>
                                <td className="esd-structure es-p30t es-p35b es-p40r es-p40l" align="left">
                                  <table width="100%" cellSpacing={0} cellPadding={0}>
                                    <tbody>
                                      <tr>
                                        <td className="esd-container-frame" width="520" valign="top" align="center">
                                          <table width="100%" cellSpacing={0} cellPadding={0}>
                                            <tbody>
                                              <tr>
                                                <td className="esd-block-text" align="center">
                                                  <h1 style={{ color: '#666666', fontSize: 40, fontFamily: 'lora, georgia, times\ new\ roman, serif' }}><em>Good Morning!</em></h1>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              {
                                !this.state.ok ?
                                  <tr>
                                    <td className="esd-structure" esd-general-paddings-checked="false" align="left">
                                      <table width="100%" cellSpacing={0} cellPadding={0}>
                                        <tbody>
                                          <tr>
                                            <td className="esd-container-frame" width="600" valign="top" align="center">
                                              <table width="100%" cellSpacing={0} cellPadding={0}>
                                                <tbody>
                                                  <tr>
                                                    <td className="esd-block-image" align="center" style={{ fontSize: 0 }}><a target="_blank">
                                                      <img className="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_b54797fc68edcecf4f6b2835e7bcba32/images/36321522405737710.gif" style={{ display: 'block' }} alt="Gift " title="Gift " width="300" /></a></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  :
                                  <>
                                    <tr>
                                      <td className="esd-structure" esd-general-paddings-checked="false" align="left">
                                        <table width="100%" cellSpacing={0} cellPadding={0}>
                                          <tbody>
                                            <tr>
                                              <td className="esd-container-frame" width="600" valign="top" align="center">
                                                <table width="100%" cellSpacing={0} cellPadding={0}>
                                                  <tbody>
                                                    <tr>
                                                      <td className="esd-block-image" align="center" style={{ fontSize: 0 }}>
                                                        <Carousel className="adapt-img" autoplay style={{}}>
                                                          <div>
                                                            <img style={{ width: 300, height: 300 }} src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-1/293229489_827471954889401_5202252536838312728_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mGy-3kbnULUAX_4Sp2M&_nc_ht=scontent.fhan15-2.fna&oh=00_AT88zi99zQHxJ9qIp7VaA33DDvbZq92-bUmFT2ktN5LNIw&oe=62E1C12D" alt="" />
                                                          </div>
                                                          <div>
                                                            <img style={{ width: 300, height: 300 }} src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/261441835_692575735045691_6870130714334884395_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=6z_enXEfq1UAX-2mdmn&_nc_ht=scontent.fhan15-2.fna&oh=00_AT_-G6aorZTr19OeVX2r2fHb096cyA3SjInnrdaCFqfnwA&oe=62E05004" alt="" />
                                                          </div>
                                                          <div>
                                                            <img style={{ width: 300, height: 300 }} src="https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/185251107_567315330905066_1015840746765432697_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=ciiE1pqPgzIAX8VtBUK&_nc_ht=scontent.fhan15-2.fna&oh=00_AT-h6DEdHfT7a_VTR8A3PfhxAJBdnvxh2uXH7e7p8pziVA&oe=6303124C" alt="" />
                                                          </div>
                                                          <div>
                                                            <img style={{ width: 300, height: 300 }} src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/208243395_606764240293508_7736180062947589734_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=NY2ufCpU2XkAX-XUbSo&_nc_ht=scontent.fhan15-1.fna&oh=00_AT-8O5nFBXcbSYrk8_pCWmnz_nODweE9FHAHK4DoCVt2_Q&oe=62E2261E" alt="" />
                                                          </div>
                                                        </Carousel>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </>
                              }
                              <tr>
                                <td className="esd-structure es-p30t es-p40b es-p40r es-p40l" align="left">
                                  <table width="100%" cellSpacing={0} cellPadding={0}>
                                    <tbody>
                                      <tr>
                                        <td className="esd-container-frame" width="520" valign="top" align="center">
                                          <table width="100%" cellSpacing={0} cellPadding={0}>
                                            <tbody>
                                              <tr>
                                                <td className="esd-block-text" align="center">
                                                  {
                                                    this.state.ok ?
                                                      <p style={{ color: '#999999' }}>Ngày mới vui vẻ!<br /> Dù sinh ra không phải là một phiên bản đặc biệt. Nhưng em là phiên bản giới hạn, và độc nhất!<br /><b>Cười lên 1 cái cho xinh nào :))</b></p>
                                                      :
                                                      <p style={{ color: '#999999' }}>Tâm trạng hôm nay thế nào rồi?<br /> Anh không có ông anh nào làm ở nhà đài cả, nên thời tiết sáng nay phụ thuộc vào em nhé!<br /><hr style={{ marginTop: 10 }} /><span style={{ fontSize: 13, opacity: 0.5, fontStyle: 'italic' }}>Hoặc nếu có ông anh nào ở nhà đài giới thiệu cho anh cũng được</span></p>
                                                  }
                                                </td>
                                              </tr>
                                              {/* <tr>
                                                <td className="esd-block-text es-p15t" align="center">
                                                  <p style={{ color: '#999999' }}><em>Best regards, Run app team.</em><br /></p>
                                                </td>
                                              </tr> */}
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="es-content" cellSpacing={0} cellPadding={0} align="center">
                    <tbody>
                      <tr>
                        <td className="esd-stripe" esd-custom-block-id="7965" align="center">
                          <table className="es-content-body" style={{ backgroundColor: '#c4dbf2' }} width="600" cellSpacing={0} cellPadding={0} bgcolor="#c4dbf2" align="center">
                            <tbody>
                              <tr>
                                <td className="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                  <table width="100%" cellSpacing={0} cellPadding={0}>
                                    <tbody>
                                      <tr>
                                        <td className="esd-container-frame" width="560" valign="top" align="center">
                                          <table width="100%" cellSpacing={0} cellPadding={0}>
                                            <tbody>
                                              <tr>
                                                <td className="esd-block-text es-p5b" esdev-links-color="#2f464b" align="center">
                                                  <h2 style={{ color: '#2f464b' }}>Coffee đá và sữa tươi!</h2>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="esd-block-text es-p10b" esdev-links-color="#2f464b" align="center">
                                                  <h3 style={{ color: '#2f464b' }}>Sẵn sàng cho một ngày mới<br />Tạm gác nỗi buồn qua một bên nhé!</h3>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="esd-block-button es-p10t es-p10b" align="center"><span className="es-button-border" style={{ borderRadius: 5, background: '#ffffff none repeat scroll 0% 0%', borderWidth: 0, borderStyle: 'solid', borderColor: '#ffffff' }}><a href="" className="es-button es-button-1658601677102" onClick={(e) => { e.preventDefault(); this.ok() }} style={{ background: '#ffffff none repeat scroll 0% 0%', borderColor: '#ffffff', borderWidth: '10px 25px', color: '#2f464b', borderRadius: 5 }}>Đồng ý cả 2 tay</a></span></td>
                                              </tr>
                                              <tr>
                                                <td className="esd-block-button es-p10t es-p10b" align="center"><span className="es-button-border" style={{ borderRadius: 5, background: '#ffffff none repeat scroll 0% 0%', borderWidth: 0, borderStyle: 'solid', borderColor: '#ffffff' }}><a href="" className="es-button es-button-1658601677102" onClick={(e) => { e.preventDefault(); this.noSadHere() }} target="_blank" style={{ background: '#ffffff none repeat scroll 0% 0%', borderColor: '#ffffff', borderWidth: '10px 25px', color: '#2f464b', borderRadius: 5 }}>{this.state.preferSad}</a></span></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table cellPadding={0} cellSpacing={0} className="es-footer" align="center">
                    <tbody>
                      <tr>
                        <td className="esd-stripe" align="center" esd-custom-block-id="89012">
                          <table className="es-footer-body" style={{ backgroundColor: '#ffffff' }} width="600" cellSpacing={0} cellPadding={0} align="center" bgcolor="#ffffff">
                            <tbody>
                              <tr>
                                <td className="esd-structure" esd-general-paddings-checked="false" align="left">
                                  <table width="100%" cellSpacing={0} cellPadding={0}>
                                    <tbody>
                                      <tr>
                                        <td className="esd-container-frame" width="600" valign="top" align="center">
                                          <table width="100%" cellSpacing={0} cellPadding={0}>
                                            {/* <tbody>
                                              <tr>
                                                <td className="esd-block-image es-p25t es-p5b es-p20r es-p20l" align="center" style={{ fontSize: 0 }}><a href="https://viewstripo.email" target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_1fee0ac138fe1171748bd02f460659d5/images/54451504249243863.png" alt="Company logo" title="Company logo" width="54" /></a></td>
                                              </tr>
                                              <tr>
                                                <td esdev-links-color="#666666" align="center" className="es-m-txt-с esd-block-text es-p10t es-p20b">
                                                  <p style={{ color: '#666666', lineHeight: '150%', fontSize: 12 }}>Copyright © 2018 Run, All rights reserved.</p>
                                                  <p style={{ color: '#666666', lineHeight: '150%', fontSize: 12 }}>You are receiving this email because you have visited our site or asked us about regular newsletter.</p>
                                                  <p style={{ color: '#666666', lineHeight: '150%' }}><a target="_blank" style={{ color: '#666666', fontSize: 12, lineHeight: '150%' }} className="unsubscribe" href="">Unsubscribe</a></p>
                                                </td>
                                              </tr>
                                            </tbody> */}
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <table className="esd-footer-popover es-content" cellSpacing={0} cellPadding={0} align="center">
                    <tbody>
                      <tr>
                        <td className="esd-stripe" align="center">
                          <table className="es-content-body" style={{ backgroundColor: 'transparent' }} width="600" cellSpacing={0} cellPadding={0} align="center">
                            <tbody>
                              <tr>
                                <td className="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                  <table width="100%" cellSpacing={0} cellPadding={0}>
                                    <tbody>
                                      <tr>
                                        <td className="esd-container-frame" width="560" valign="top" align="center">
                                          <table width="100%" cellSpacing={0} cellPadding={0}>
                                            <tbody>
                                              <tr>
                                                <td className="esd-block-image es-infoblock made_with" align="center" style={{ fontSize: 0 }}><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=software&utm_content=birthday"><img src="https://tlr.stripocdn.email/content/guids/CABINET_9df86e5b6c53dd0319931e2447ed854b/images/64951510234941531.png" alt="" width="125" /></a></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;
