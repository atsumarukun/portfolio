function WindowBodyComponent(status) {
  switch (status) {
    case Window.Status.sns:
      return SnsWindowBodyComponent();
    case Window.Status.about:
      return AboutWindowBodyComponent();
  }
}
