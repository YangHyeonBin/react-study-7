import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false }; // 마음대로 state 만들고 사용 가능
  }

  // ErrorBoundary 위한 lifecycle method
  componentDidCatch(error) { // React가 자동으로 전달해주는 에러 객체를, 원하는 이름의 매개변수로 받음
    // 에러 핸들할 코드 작성
    console.log(error);
    this.setState({ hasError: true }); // state 변경
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>; // 에러 발생시 화면으로 알려주는 코드 작성 가능
    }
    return this.props.children; // 자식 컴포넌트 감싸기 위한 거라 props.children 받음
  }
}

export default ErrorBoundary;