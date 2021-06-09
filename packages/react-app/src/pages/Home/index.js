import React from "react";
import logo from "@/assets/react.svg";
import "./index.less";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Home extends React.Component {
  componentDidMount() {
    console.log(this.props.actions, "this.props");
    // 获取用户信息测试
    this.props.actions
      .getUserinfo({ id: 1 })
      .then((res) => {
        console.log("获取用户信息测试：", res);
      })
      .catch(() => {
        console.log("Promise catch");
      })
      .finally(() => {
        console.log("Promise finally");
      });
  }
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{" "}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}
Home.propTypes = {
  actions: PropTypes.object, // 上面model中定义的actions对象，自动成为this.props.actions变量
};
const mapState = (state) => ({
  userinfo: state.app.userinfo,
});
//为啥这种写法不行啊
// const mapDispatch = (dispatch) => {
//   console.log(dispatch.app, "dispatch");
//   return {
//     actions: {
//       getUserinfo: () => dispatch.app.setUserInfo,
//     },
//   };
// };

export default connect(mapState, (dispatch) => {
  return {
    actions: {
      getUserinfo: dispatch.app.getUserinfo,
    },
  };
})(Home);
