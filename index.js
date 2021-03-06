"use strict"
const http = require("http");
const hostname = "127.0.0.1";
const nodemailer = require("nodemailer")

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.headersSent("content-Type", "text/plain");
  res.end("hello world")
})
server.listen(3000, hostname, () => {
  console.log("server is running")
})
const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    

    <style>
      * {
        margin: 0;
        padding: 0;
       
      }
      table {
        border-spacing: 0;
      }
      @media screen and (min-width: 200px) and (max-width: 600px) {
        .block1 {
          display: block;
        }
        .block2 {
          display: block;
          width: 80%;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100%;
      background-color: #eeeeee;
      background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_VAiFR_ORfbG8qm-OmG9q0VUqQ3kA8hk0acO7_R8hKQL5g-f3fDeuDegT93sJ9yHxCo&usqp=CAU);
      background-repeat: no-repeat;
      background-size: 100%;
    "
  >
    <table width="100%" align="center" style="border-spacing: 0">
      <tbody>
        <tr>
          <td align="center">
            <table class="wrap" width="600" align="center" style="background-color: #eeeeee">
              <tbody>
                <tr>
                  <td align="center">
                    <table class="content" width="550" height="500">
                      <tbody valign="top">
                        <tr>
                          <td>
                            <table>
                              <tbody>
                                <tr>
                                  <td>&nbsp;</td>
                                </tr>
                                <tr>
                                  <th align="left" style="font-size: 28px">Welcome to Zervx</th>
                                </tr>
                                <tr>
                                  <td>&nbsp;</td>
                                </tr>

                                <tr>
                                  <td style="color: #77acf1">Thanks for signing up!We're excited to have you join us and start riding</td>
                                </tr>
                                <tr>
                                  <td style="line-height: 10px">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td>just request a pickup,and in minutes a car will be curbside and ready to take you wherever you need to go</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr height="50px">
                          <td style="line-height: 3px" valign="middle"><table width="100%" height="1px" style="background-color: gray"></table></td>
                        </tr>
                        <tr>
                          <td>
                            <table height="300px" width="100%">
                              <tbody>
                                <tr>
                                  <th align="left" style="font-size: 30px">3 step to Ride</th>
                                </tr>
                                <tr>
                                  <td>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td>
                                    <table width="100%" align="center" class="blocking">
                                      <tbody>
                                        <tr align="center" style="background-color: #f7f7f7">
                                          <td class="block1" align="center" width="50%" valign="top">
                                            <img
                                              width="100%"
                                              height="350px"
                                              src="https://www.pngitem.com/pimgs/m/57-573913_phone-map-png-transparent-png.png"
                                              alt=""
                                            />
                                          </td>
                                          <td align="center" class="block2">
                                            <table width="100%">
                                              <tbody>
                                                <tr>
                                                  <th align="left">Order a car</th>
                                                </tr>
                                                <tr>
                                                  <td style="line-height: 5px">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td align="left" style="font-size: 14px">Use the iphone or Android app to request a ride</td>
                                                </tr>
                                                <tr>
                                                  <td style="line-height: 10px">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <th align="left">Your Driver Comes To You</th>
                                                </tr>
                                                <tr>
                                                  <td style="line-height: 5px">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td align="left" style="font-size: 14px">Sit Back and relax .We'll text you when your Uber arrives</td>
                                                </tr>

                                                <tr>
                                                  <td style="line-height: 10px">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <th align="left">Hop in & Hop Out</th>
                                                </tr>
                                                <tr>
                                                  <td style="line-height: 8px">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td style="font-size: 14px">
                                                    after arriving at your destination we'll charge your credit card on the file and email you a receipt
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td style="line-height: 15px">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    &nbsp;
                                                    <img
                                                      style="width: 120px; height: 40px"
                                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
                                                      alt=""
                                                    />&nbsp;&nbsp;
                                                    <img
                                                      style="width: 120px; height: 40px"
                                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEKY6i2qtBWuc4F8m9eMbR3nUv58FojzXDPm96Kiki7_Ot3_yxqbi4_dq9JZI4JJ9Uw&amp;usqp=CAU"
                                                      alt=""
                                                    />
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td>&nbsp;</td>
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
                        <tr height="50px">
                          <td style="line-height: 3px" valign="middle"><table width="100%" height="1px" style="background-color: gray"></table></td>
                        </tr>
                        <tr>
                          <td>
                            <table width="100%" align="center">
                              <tbody>
                                <tr>
                                  <th align="left" style="font-size: 24px">Tips To Get Started</th>
                                </tr>
                                <tr>
                                  <td style="line-height: 15px">&nbsp;</td>
                                </tr>
                                <tr>
                                  <th align="left">Requested when you're ready to ride</th>
                                </tr>
                                <tr>
                                  <td style="line-height: 8px">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td style="font-size: 14px">
                                    pickups are stricktly on-demand.so we don't accept resdrvation in advance.just open the app a little bit in advance of when
                                    you need to leave and requested a car
                                  </td>
                                </tr>
                                <tr>
                                  <td style="line-height: 13px">&nbsp;</td>
                                </tr>
                                <tr>
                                  <th align="left">confirm your number</th>
                                </tr>
                                <tr>
                                  <td style="line-height: 8px">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td align="left" style="font-size: 14px">
                                    Look for a text asking you to verify your mobile number .if you don't receive one, ler us know at
                                    <a href="www.berarkrays.com"></a>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="line-height: 13px">&nbsp;</td>
                                </tr>
                                <tr>
                                  <th align="left">Estimated your fare</th>
                                </tr>
                                <tr>
                                  <td style="line-height: 8px">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td align="left" style="font-size: 14px">
                                    You can get a fare estimated for your trip right in the app by following the instruction at
                                    <a href="www.admin.zervx.com">zervx.com</a>
                                  </td>
                                </tr>
                                <tr height="50px">
                                  <td style="line-height: 3px" valign="middle"><table width="100%" height="1px" style="background-color: gray"></table></td>
                                </tr>
                                <tr>
                                  <th align="left" style="font-size: 30px">Contact Us</th>
                                </tr>
                                <tr>
                                  <td>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td style="font-size: 15px">
                                    Our company managers are here to answer any questions you may have and make sure you have an zervx experience . To get in
                                    touch .just head to <a href="www.zervx.com">support.zervx.com</a>
                                  </td>
                                </tr>

                                <tr height="60px">
                                  <td style="line-height: 3px" valign="middle"><table width="100%" height="1px" style="background-color: gray"></table></td>
                                </tr>
                                <tr height="100px">
                                  <td align="center">
                                    <a href=""
                                      ><img
                                        style="border-radius: 50%"
                                        width="30"
                                        height="30"
                                        src="https://www.pngfind.com/pngs/m/115-1153198_twitter-facebook-logo-grey-png-transparent-png.png"
                                        alt=""
                                    /></a>
                                    <a href=""
                                      ><img
                                        style="border-radius: 50%"
                                        width="30"
                                        height="30"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTMu6kAluShKolnoC4KGU5ikLDGKPX6mJy3wtnUq_G2n-PxVk-18I2EgIArHipsmZ4XY&usqp=CAU"
                                        alt=""
                                    /></a>
                                    <a href=""
                                      ><img
                                        style="border-radius: 50%"
                                        width="30"
                                        height="30"
                                        src="https://cdn0.iconfinder.com/data/icons/flat-social-media-icons-set-round-style-1/550/linkedin-512.png"
                                        alt=""
                                    /></a>
                                    <a href=""
                                      ><img
                                        style="border-radius: 50%"
                                        width="30"
                                        height="30"
                                        src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                                        alt=""
                                    /></a>
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
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>

`;



async function main() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "usvishnuprakash@gmail.com",
      pass: "vmstejtvsfwninod"
    }
  })
  let info = await transporter.sendMail({
    from: ".com",
    to: "japaharjose@gmail.com",
    subject: "hai tamil anna",
    html: html
  })
  console.log("preview url:%s", nodemailer.getTestMessageUrl(info.messageId))
}
main().catch(console.error)


