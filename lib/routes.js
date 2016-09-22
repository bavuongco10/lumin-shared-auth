FlowRouter.route("/shared-auth-frame", {
  name: "shared-auth-frame",
  action() {
    BlazeLayout.render('emptyLayout',{main : 'sharedAuthFrame'});
  }
});

