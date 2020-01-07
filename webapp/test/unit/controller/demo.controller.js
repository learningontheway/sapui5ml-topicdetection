/*global QUnit*/

sap.ui.define([
	"demo/sapui5ml-topicdetection/controller/demo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("demo Controller");

	QUnit.test("I should test the demo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});