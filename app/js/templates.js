this["template"] = this["template"] || {};
this["template"]["contact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n\n<div class=\"contactCard\">\n<li id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"contactItem\">\n\n  <div id=\"fullName\" class=\"fullName\"> "
    + alias3(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastName","hash":{},"data":data}) : helper)))
    + ", "
    + alias3(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstName","hash":{},"data":data}) : helper)))
    + " <span id=\"remove\" class=\"remove\">X</span><div></div></div>\n\n  <div class=\"email\">"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + " </div>\n  <div class=\"tagDiv\"><a id=\"emailTag\" href=\"#\" class=\"tag\">email</a></div>\n\n  <div class=\"linkedin\">"
    + alias3(((helper = (helper = helpers.linkedin || (depth0 != null ? depth0.linkedin : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"linkedin","hash":{},"data":data}) : helper)))
    + " </div>\n  <div class=\"tagDiv\"><a href=\"#\" id=\"linkedinTag\" class=\"tag\">linkedin</a></div>\n\n  <div class=\"social\">\n  <div class=\"twitter\">"
    + alias3(((helper = (helper = helpers.twitter || (depth0 != null ? depth0.twitter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"twitter","hash":{},"data":data}) : helper)))
    + " </div>\n  <div class=\"phoneNumber\">"
    + alias3(((helper = (helper = helpers.phoneNumber || (depth0 != null ? depth0.phoneNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phoneNumber","hash":{},"data":data}) : helper)))
    + " </div>\n  </div>\n  <div class=\"tagDiv\">\n  <a href=\"#\" id=\"twitterTag\" class=\"tag\">twitter</a>\n  </div>\n\n  </li>\n</div>\n";
},"useData":true});
this["template"] = this["template"] || {};
this["template"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<div class=\"sidebar\">\n<li id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"sidebarList\">\n\n  <div id=\"sidebarFullName\" class=\"sidebarFullName\"> "
    + alias3(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastName","hash":{},"data":data}) : helper)))
    + ", "
    + alias3(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "</div>\n\n\n</li>\n</div>\n";
},"useData":true});
this["template"] = this["template"] || {};
this["template"]["sidebar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<div class=\"sidebar\">\n<li id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"sidebarList\">\n\n  <div id=\"sidebarFullName\" class=\"sidebarFullName\"> "
    + alias3(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastName","hash":{},"data":data}) : helper)))
    + ", "
    + alias3(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "</div>\n\n\n</li>\n</div>\n";
},"useData":true});