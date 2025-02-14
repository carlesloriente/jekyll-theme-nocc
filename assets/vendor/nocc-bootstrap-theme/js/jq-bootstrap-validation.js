!(function (a) {
    var t = [],
      e = {
        options: {
          prependExistingHelpBlock: false,
          sniffHtml: true,
          preventSubmit: true,
          submitError: false,
          submitSuccess: false,
          semanticallyStrict: false,
          autoAdd: { helpBlocks: true },
          filter: function () {
            return true;
          },
        },
        methods: {
          init: function (o) {
            var r = a.extend(true, {}, e);
            r.options = a.extend(true, r.options, o);
            var l = a.unique(
              this.map(function () {
                return a(this).parents("form")[0];
              }).toArray()
            );
            return (
              a(l).bind("submit", function (t) {
                var e = a(this),
                  i = 0,
                  n = e.find("input,textarea,select").not("[type=submit],[type=image]").filter(r.options.filter);
                n.trigger("submit.validation").trigger("validationLostFocus.validation"),
                  n.each(function (t, e) {
                    var n = a(e).parents(".form-group").first();
                    n.hasClass("warning") && (n.removeClass("warning").addClass("error"), i++);
                  }),
                  n.trigger("validationLostFocus.validation"),
                  i
                    ? (r.options.preventSubmit && t.preventDefault(), e.addClass("error"), a.isFunction(r.options.submitError) && r.options.submitError(e, t, n.jqBootstrapValidation("collectErrors", true)))
                    : (e.removeClass("error"), a.isFunction(r.options.submitSuccess) && r.options.submitSuccess(e, t));
              }),
              this.each(function () {
                var e = a(this),
                  o = e.parents(".form-group").first(),
                  l = o.find(".help-block").first(),
                  d = e.parents("form").first(),
                  s = [];
                if ((!l.length && r.options.autoAdd && r.options.autoAdd.helpBlocks && ((l = a('<div class="help-block" />')), o.find(".controls").append(l), t.push(l[0])), r.options.sniffHtml)) {
                  var c = "";
                  if (
                    (undefined !== e.attr("pattern") &&
                      ((c = "Not in the expected format<!-- data-validation-pattern-message to override -->"),
                      e.data("validationPatternMessage") && (c = e.data("validationPatternMessage")),
                      e.data("validationPatternMessage", c),
                      e.data("validationPatternRegex", e.attr("pattern"))),
                    undefined !== e.attr("max") || undefined !== e.attr("aria-valuemax"))
                  ) {
                    var v = undefined !== e.attr("max") ? e.attr("max") : e.attr("aria-valuemax");
                    (c = "Too high: Maximum of '" + v + "'<!-- data-validation-max-message to override -->"),
                      e.data("validationMaxMessage") && (c = e.data("validationMaxMessage")),
                      e.data("validationMaxMessage", c),
                      e.data("validationMaxMax", v);
                  }
                  if (undefined !== e.attr("min") || undefined !== e.attr("aria-valuemin")) {
                    var m = undefined !== e.attr("min") ? e.attr("min") : e.attr("aria-valuemin");
                    (c = "Too low: Minimum of '" + m + "'<!-- data-validation-min-message to override -->"),
                      e.data("validationMinMessage") && (c = e.data("validationMinMessage")),
                      e.data("validationMinMessage", c),
                      e.data("validationMinMin", m);
                  }
                  undefined !== e.attr("maxlength") &&
                    ((c = "Too long: Maximum of '" + e.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->"),
                    e.data("validationMaxlengthMessage") && (c = e.data("validationMaxlengthMessage")),
                    e.data("validationMaxlengthMessage", c),
                    e.data("validationMaxlengthMaxlength", e.attr("maxlength"))),
                    undefined !== e.attr("minlength") &&
                      ((c = "Too short: Minimum of '" + e.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->"),
                      e.data("validationMinlengthMessage") && (c = e.data("validationMinlengthMessage")),
                      e.data("validationMinlengthMessage", c),
                      e.data("validationMinlengthMinlength", e.attr("minlength"))),
                    (undefined !== e.attr("required") || undefined !== e.attr("aria-required")) &&
                      ((c = r.builtInValidators.required.message), e.data("validationRequiredMessage") && (c = e.data("validationRequiredMessage")), e.data("validationRequiredMessage", c)),
                    undefined !== e.attr("type") &&
                      "number" === e.attr("type").toLowerCase() &&
                      ((c = r.builtInValidators.number.message), e.data("validationNumberMessage") && (c = e.data("validationNumberMessage")), e.data("validationNumberMessage", c)),
                    undefined !== e.attr("type") &&
                      "email" === e.attr("type").toLowerCase() &&
                      ((c = "Not a valid email address<!-- data-validator-validemail-message to override -->"),
                      e.data("validationValidemailMessage") ? (c = e.data("validationValidemailMessage")) : e.data("validationEmailMessage") && (c = e.data("validationEmailMessage")),
                      e.data("validationValidemailMessage", c)),
                    undefined !== e.attr("minchecked") &&
                      ((c = "Not enough options checked; Minimum of '" + e.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->"),
                      e.data("validationMincheckedMessage") && (c = e.data("validationMincheckedMessage")),
                      e.data("validationMincheckedMessage", c),
                      e.data("validationMincheckedMinchecked", e.attr("minchecked"))),
                    undefined !== e.attr("maxchecked") &&
                      ((c = "Too many options checked; Maximum of '" + e.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->"),
                      e.data("validationMaxcheckedMessage") && (c = e.data("validationMaxcheckedMessage")),
                      e.data("validationMaxcheckedMessage", c),
                      e.data("validationMaxcheckedMaxchecked", e.attr("maxchecked")));
                }
                undefined !== e.data("validation") && (s = e.data("validation").split(",")),
                  a.each(e.data(), function (a, t) {
                    var e = a.replace(/([A-Z])/g, ",$1").split(",");
                    "validation" === e[0] && e[1] && s.push(e[1]);
                  });
                var u = s,
                  g = [];
                do
                  a.each(s, function (a, t) {
                    s[a] = i(t);
                  }),
                    (s = a.unique(s)),
                    (g = []),
                    a.each(u, function (t, n) {
                      if (undefined !== e.data("validation" + n + "Shortcut"))
                        a.each(e.data("validation" + n + "Shortcut").split(","), function (a, t) {
                          g.push(t);
                        });
                      else if (r.builtInValidators[n.toLowerCase()]) {
                        var o = r.builtInValidators[n.toLowerCase()];
                        "shortcut" === o.type.toLowerCase() &&
                          a.each(o.shortcut.split(","), function (a, t) {
                            (t = i(t)), g.push(t), s.push(t);
                          });
                      }
                    }),
                    (u = g);
                while (u.length > 0);
                var h = {};
                a.each(s, function (t, n) {
                  var o = e.data("validation" + n + "Message"),
                    l = undefined !== o,
                    d = false;
                  if (
                    ((o = o || "'" + n + "' validation failed <!-- Add attribute 'data-validation-" + n.toLowerCase() + "-message' to input to change this message -->"),
                    a.each(r.validatorTypes, function (t, r) {
                      undefined === h[t] && (h[t] = []), d || undefined === e.data("validation" + n + i(r.name)) || (h[t].push(a.extend(true, { name: i(r.name), message: o }, r.init(e, n))), (d = true));
                    }),
                    !d && r.builtInValidators[n.toLowerCase()])
                  ) {
                    var s = a.extend(true, {}, r.builtInValidators[n.toLowerCase()]);
                    l && (s.message = o);
                    var c = s.type.toLowerCase();
                    "shortcut" === c
                      ? (d = true)
                      : a.each(r.validatorTypes, function (t, o) {
                          undefined === h[t] && (h[t] = []), d || c !== t.toLowerCase() || (e.data("validation" + n + i(o.name), s[o.name.toLowerCase()]), h[c].push(a.extend(s, o.init(e, n))), (d = true));
                        });
                  }
                  d || a.error("Cannot find validation info for '" + n + "'");
                }),
                  l.data("original-contents", l.data("original-contents") ? l.data("original-contents") : l.html()),
                  l.data("original-role", l.data("original-role") ? l.data("original-role") : l.attr("role")),
                  o.data("original-classes", o.data("original-clases") ? o.data("original-classes") : o.attr("class")),
                  e.data("original-aria-invalid", e.data("original-aria-invalid") ? e.data("original-aria-invalid") : e.attr("aria-invalid")),
                  e.bind("validation.validation", function (t, i) {
                    var o = n(e),
                      l = [];
                    return (
                      a.each(h, function (t, n) {
                        (o || (i && i.includeEmpty) || (r.validatorTypes[t].blockSubmit && i && i.submitting)) &&
                          a.each(n, function (a, i) {
                            r.validatorTypes[t].validate(e, o, i) && l.push(i.message);
                          });
                      }),
                      l
                    );
                  }),
                  e.bind("getValidators.validation", function () {
                    return h;
                  }),
                  e.bind("submit.validation", function () {
                    return e.triggerHandler("change.validation", { submitting: true });
                  }),
                  e.bind("keyup.validation focus.validation blur.validation click.validation keydown.validation keypress.validation change.validation", function (t, i) {
                    var s = n(e),
                      c = [];
                    o.find("input,textarea,select").each(function (t, n) {
                      var o = c.length;
                      if (
                        (a.each(a(n).triggerHandler("validation.validation", i), function (a, t) {
                          c.push(t);
                        }),
                        c.length > o)
                      )
                        a(n).attr("aria-invalid", "true");
                      else {
                        var r = e.data("original-aria-invalid");
                        a(n).attr("aria-invalid", undefined !== r && r);
                      }
                    }),
                      d
                        .find("input,select,textarea")
                        .not(e)
                        .not('[name="' + e.attr("name") + '"]')
                        .trigger("validationLostFocus.validation"),
                      (c = a.unique(c.sort())).length
                        ? (o.removeClass("success error").addClass("warning"),
                          r.options.semanticallyStrict && 1 === c.length
                            ? l.html(c[0] + (r.options.prependExistingHelpBlock ? l.data("original-contents") : ""))
                            : l.html('<ul role="alert"><li>' + c.join("</li><li>") + "</li></ul>" + (r.options.prependExistingHelpBlock ? l.data("original-contents") : "")))
                        : (o.removeClass("warning error success"), s.length > 0 && o.addClass("success"), l.html(l.data("original-contents"))),
                      "blur" === t.type && o.removeClass("success");
                  }),
                  e.bind("validationLostFocus.validation", function () {
                    o.removeClass("success");
                  });
              })
            );
          },
          destroy: function () {
            return this.each(function () {
              var e = a(this),
                i = e.parents(".form-group").first(),
                n = i.find(".help-block").first();
              e.unbind(".validation"),
                n.html(n.data("original-contents")),
                i.attr("class", i.data("original-classes")),
                e.attr("aria-invalid", e.data("original-aria-invalid")),
                n.attr("role", e.data("original-role")),
                t.indexOf(n[0]) > -1 && n.remove();
            });
          },
          collectErrors: function (t) {
            var e = {};
            return (
              this.each(function (t, i) {
                var n = a(i),
                  o = n.attr("name"),
                  r = n.triggerHandler("validation.validation", { includeEmpty: true });
                e[o] = a.extend(true, r, e[o]);
              }),
              a.each(e, function (a, t) {
                0 === t.length && delete e[a];
              }),
              e
            );
          },
          hasErrors: function () {
            var t = [];
            return (
              this.each(function (e, i) {
                t = t.concat(a(i).triggerHandler("getValidators.validation") ? a(i).triggerHandler("validation.validation", { submitting: true }) : []);
              }),
              t.length > 0
            );
          },
          override: function (t) {
            e = a.extend(true, e, t);
          },
        },
        validatorTypes: {
          callback: {
            name: "callback",
            init: function (a, t) {
              return { validatorName: t, callback: a.data("validation" + t + "Callback"), lastValue: a.val(), lastValid: true, lastFinished: true };
            },
            validate: function (a, t, e) {
              if (e.lastValue === t && e.lastFinished) return !e.lastValid;
              // deepcode ignore OperatorPrecedence: <please specify a reason of ignoring this>
              if (true === e.lastFinished) {
                (e.lastValue = t), (e.lastValid = true), (e.lastFinished = false);
                var i = e,
                  n = a;
                !(function a(t, e) {
                  for (var i = Array.prototype.slice.call(arguments).splice(2), n = t.split("."), o = n.pop(), r = 0; r < n.length; r++) e = e[n[r]];
                  return e[o].apply(this, i);
                })(e.callback, window, a, t, function (a) {
                  i.lastValue === a.value &&
                    ((i.lastValid = a.valid),
                    a.message && (i.message = a.message),
                    (i.lastFinished = true),
                    n.data("validation" + i.validatorName + "Message", i.message),
                    setTimeout(function () {
                      n.trigger("change.validation");
                    }, 1));
                });
              }
              return false;
            },
          },
          ajax: {
            name: "ajax",
            init: function (a, t) {
              return { validatorName: t, url: a.data("validation" + t + "Ajax"), lastValue: a.val(), lastValid: true, lastFinished: true };
            },
            validate: function (t, e, i) {
              // deepcode ignore OperatorPrecedence: <please specify a reason of ignoring this>
              return "" + i.lastValue == "" + e && true === i.lastFinished
                // deepcode ignore OperatorPrecedence: <please specify a reason of ignoring this>
                ? false === i.lastValid
                // deepcode ignore OperatorPrecedence: <please specify a reason of ignoring this>
                : (true === i.lastFinished &&
                    ((i.lastValue = e),
                    (i.lastValid = true),
                    (i.lastFinished = false),
                    a.ajax({
                      url: i.url,
                      data: "value=" + e + "&field=" + t.attr("name"),
                      dataType: "json",
                      success: function (a) {
                        "" + i.lastValue == "" + a.value &&
                          ((i.lastValid = !!a.valid),
                          a.message && (i.message = a.message),
                          (i.lastFinished = true),
                          t.data("validation" + i.validatorName + "Message", i.message),
                          setTimeout(function () {
                            t.trigger("change.validation");
                          }, 1));
                      },
                      failure: function () {
                        (i.lastValid = true),
                          (i.message = "ajax call failed"),
                          (i.lastFinished = true),
                          t.data("validation" + i.validatorName + "Message", i.message),
                          setTimeout(function () {
                            t.trigger("change.validation");
                          }, 1);
                      },
                    })),
                  false);
            },
          },
          regex: {
            name: "regex",
            init: function (a, t) {
              var e;
              return { regex: ((e = a.data("validation" + t + "Regex")), RegExp("^" + e + "$")) };
            },
            validate: function (a, t, e) {
              return (!e.regex.test(t) && !e.negative) || (e.regex.test(t) && e.negative);
            },
          },
          required: {
            name: "required",
            init: function (a, t) {
              return {};
            },
            validate: function (a, t, e) {
              return !!(0 === t.length && !e.negative) || !!(t.length > 0 && e.negative);
            },
            blockSubmit: true,
          },
          match: {
            name: "match",
            init: function (a, t) {
              var e = a
                .parents("form")
                .first()
                .find('[name="' + a.data("validation" + t + "Match") + '"]')
                .first();
              return (
                e.bind("validation.validation", function () {
                  a.trigger("change.validation", { submitting: true });
                }),
                { element: e }
              );
            },
            validate: function (a, t, e) {
              return (t !== e.element.val() && !e.negative) || (t === e.element.val() && e.negative);
            },
            blockSubmit: true,
          },
          max: {
            name: "max",
            init: function (a, t) {
              return { max: a.data("validation" + t + "Max") };
            },
            validate: function (a, t, e) {
              return (parseFloat(t, 10) > parseFloat(e.max, 10) && !e.negative) || (parseFloat(t, 10) <= parseFloat(e.max, 10) && e.negative);
            },
          },
          min: {
            name: "min",
            init: function (a, t) {
              return { min: a.data("validation" + t + "Min") };
            },
            validate: function (a, t, e) {
              return (parseFloat(t) < parseFloat(e.min) && !e.negative) || (parseFloat(t) >= parseFloat(e.min) && e.negative);
            },
          },
          maxlength: {
            name: "maxlength",
            init: function (a, t) {
              return { maxlength: a.data("validation" + t + "Maxlength") };
            },
            validate: function (a, t, e) {
              return (t.length > e.maxlength && !e.negative) || (t.length <= e.maxlength && e.negative);
            },
          },
          minlength: {
            name: "minlength",
            init: function (a, t) {
              return { minlength: a.data("validation" + t + "Minlength") };
            },
            validate: function (a, t, e) {
              return (t.length < e.minlength && !e.negative) || (t.length >= e.minlength && e.negative);
            },
          },
          maxchecked: {
            name: "maxchecked",
            init: function (a, t) {
              var e = a
                .parents("form")
                .first()
                .find('[name="' + a.attr("name") + '"]');
              return (
                e.bind("click.validation", function () {
                  a.trigger("change.validation", { includeEmpty: true });
                }),
                { maxchecked: a.data("validation" + t + "Maxchecked"), elements: e }
              );
            },
            validate: function (a, t, e) {
              return (e.elements.filter(":checked").length > e.maxchecked && !e.negative) || (e.elements.filter(":checked").length <= e.maxchecked && e.negative);
            },
            blockSubmit: true,
          },
          minchecked: {
            name: "minchecked",
            init: function (a, t) {
              var e = a
                .parents("form")
                .first()
                .find('[name="' + a.attr("name") + '"]');
              return (
                e.bind("click.validation", function () {
                  a.trigger("change.validation", { includeEmpty: true });
                }),
                { minchecked: a.data("validation" + t + "Minchecked"), elements: e }
              );
            },
            validate: function (a, t, e) {
              return (e.elements.filter(":checked").length < e.minchecked && !e.negative) || (e.elements.filter(":checked").length >= e.minchecked && e.negative);
            },
            blockSubmit: true,
          },
        },
        builtInValidators: {
          email: { name: "Email", type: "shortcut", shortcut: "validemail" },
          validemail: { name: "Validemail", type: "regex", regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}", message: "Not a valid email address<!-- data-validator-validemail-message to override -->" },
          passwordagain: { name: "Passwordagain", type: "match", match: "password", message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->" },
          positive: { name: "Positive", type: "shortcut", shortcut: "number,positivenumber" },
          negative: { name: "Negative", type: "shortcut", shortcut: "number,negativenumber" },
          number: { name: "Number", type: "regex", regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?", message: "Must be a number<!-- data-validator-number-message to override -->" },
          integer: { name: "Integer", type: "regex", regex: "[+-]?\\d+", message: "No decimal places allowed<!-- data-validator-integer-message to override -->" },
          positivenumber: { name: "Positivenumber", type: "min", min: 0, message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->" },
          negativenumber: { name: "Negativenumber", type: "max", max: 0, message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->" },
          required: { name: "Required", type: "required", message: "This is required<!-- data-validator-required-message to override -->" },
          checkone: { name: "Checkone", type: "minchecked", minchecked: 1, message: "Check at least one option<!-- data-validation-checkone-message to override -->" },
        },
      },
      i = function (a) {
        return a.toLowerCase().replace(/(^|\s)([a-z])/g, function (a, t, e) {
          return t + e.toUpperCase();
        });
      },
      n = function (t) {
        var e = t.val(),
          i = t.attr("type");
        return "checkbox" === i && (e = t.is(":checked") ? e : ""), "radio" === i && (e = a('input[name="' + t.attr("name") + '"]:checked').length > 0 ? e : ""), e;
      };
    (a.fn.jqBootstrapValidation = function (t) {
      return e.methods[t]
        ? e.methods[t].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof t && t
        ? (a.error("Method " + t + " does not exist on jQuery.jqBootstrapValidation"), null)
        : e.methods.init.apply(this, arguments);
    }),
      (a.jqBootstrapValidation = function (t) {
        a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments);
      });
  })(jQuery);
//# sourceMappingURL=jq-bootstrap-validation.js.map

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianEtYm9vdHN0cmFwLXZhbGlkYXRpb24uanMiLCJzb3VyY2VzIjpbInNyYy9qcy9qcS1ib290c3RyYXAtdmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhKGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIHQgPSBbXSxcbiAgICAgIGUgPSB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBwcmVwZW5kRXhpc3RpbmdIZWxwQmxvY2s6ICExLFxuICAgICAgICAgIHNuaWZmSHRtbDogITAsXG4gICAgICAgICAgcHJldmVudFN1Ym1pdDogITAsXG4gICAgICAgICAgc3VibWl0RXJyb3I6ICExLFxuICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M6ICExLFxuICAgICAgICAgIHNlbWFudGljYWxseVN0cmljdDogITEsXG4gICAgICAgICAgYXV0b0FkZDogeyBoZWxwQmxvY2tzOiAhMCB9LFxuICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICBpbml0OiBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIHIgPSBhLmV4dGVuZCghMCwge30sIGUpO1xuICAgICAgICAgICAgci5vcHRpb25zID0gYS5leHRlbmQoITAsIHIub3B0aW9ucywgbyk7XG4gICAgICAgICAgICB2YXIgbCA9IGEudW5pcXVlKFxuICAgICAgICAgICAgICB0aGlzLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEodGhpcykucGFyZW50cyhcImZvcm1cIilbMF07XG4gICAgICAgICAgICAgIH0pLnRvQXJyYXkoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIGEobCkuYmluZChcInN1Ym1pdFwiLCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gYSh0aGlzKSxcbiAgICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgbiA9IGUuZmluZChcImlucHV0LHRleHRhcmVhLHNlbGVjdFwiKS5ub3QoXCJbdHlwZT1zdWJtaXRdLFt0eXBlPWltYWdlXVwiKS5maWx0ZXIoci5vcHRpb25zLmZpbHRlcik7XG4gICAgICAgICAgICAgICAgbi50cmlnZ2VyKFwic3VibWl0LnZhbGlkYXRpb25cIikudHJpZ2dlcihcInZhbGlkYXRpb25Mb3N0Rm9jdXMudmFsaWRhdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgIG4uZWFjaChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGEoZSkucGFyZW50cyhcIi5mb3JtLWdyb3VwXCIpLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgICAgIG4uaGFzQ2xhc3MoXCJ3YXJuaW5nXCIpICYmIChuLnJlbW92ZUNsYXNzKFwid2FybmluZ1wiKS5hZGRDbGFzcyhcImVycm9yXCIpLCBpKyspO1xuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBuLnRyaWdnZXIoXCJ2YWxpZGF0aW9uTG9zdEZvY3VzLnZhbGlkYXRpb25cIiksXG4gICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgICAgID8gKHIub3B0aW9ucy5wcmV2ZW50U3VibWl0ICYmIHQucHJldmVudERlZmF1bHQoKSwgZS5hZGRDbGFzcyhcImVycm9yXCIpLCBhLmlzRnVuY3Rpb24oci5vcHRpb25zLnN1Ym1pdEVycm9yKSAmJiByLm9wdGlvbnMuc3VibWl0RXJyb3IoZSwgdCwgbi5qcUJvb3RzdHJhcFZhbGlkYXRpb24oXCJjb2xsZWN0RXJyb3JzXCIsICEwKSkpXG4gICAgICAgICAgICAgICAgICAgIDogKGUucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKSwgYS5pc0Z1bmN0aW9uKHIub3B0aW9ucy5zdWJtaXRTdWNjZXNzKSAmJiByLm9wdGlvbnMuc3VibWl0U3VjY2VzcyhlLCB0KSk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gYSh0aGlzKSxcbiAgICAgICAgICAgICAgICAgIG8gPSBlLnBhcmVudHMoXCIuZm9ybS1ncm91cFwiKS5maXJzdCgpLFxuICAgICAgICAgICAgICAgICAgbCA9IG8uZmluZChcIi5oZWxwLWJsb2NrXCIpLmZpcnN0KCksXG4gICAgICAgICAgICAgICAgICBkID0gZS5wYXJlbnRzKFwiZm9ybVwiKS5maXJzdCgpLFxuICAgICAgICAgICAgICAgICAgcyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICgoIWwubGVuZ3RoICYmIHIub3B0aW9ucy5hdXRvQWRkICYmIHIub3B0aW9ucy5hdXRvQWRkLmhlbHBCbG9ja3MgJiYgKChsID0gYSgnPGRpdiBjbGFzcz1cImhlbHAtYmxvY2tcIiAvPicpKSwgby5maW5kKFwiLmNvbnRyb2xzXCIpLmFwcGVuZChsKSwgdC5wdXNoKGxbMF0pKSwgci5vcHRpb25zLnNuaWZmSHRtbCkpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKHZvaWQgMCAhPT0gZS5hdHRyKFwicGF0dGVyblwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICgoYyA9IFwiTm90IGluIHRoZSBleHBlY3RlZCBmb3JtYXQ8IS0tIGRhdGEtdmFsaWRhdGlvbi1wYXR0ZXJuLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YShcInZhbGlkYXRpb25QYXR0ZXJuTWVzc2FnZVwiKSAmJiAoYyA9IGUuZGF0YShcInZhbGlkYXRpb25QYXR0ZXJuTWVzc2FnZVwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgZS5kYXRhKFwidmFsaWRhdGlvblBhdHRlcm5NZXNzYWdlXCIsIGMpLFxuICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YShcInZhbGlkYXRpb25QYXR0ZXJuUmVnZXhcIiwgZS5hdHRyKFwicGF0dGVyblwiKSkpLFxuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGUuYXR0cihcIm1heFwiKSB8fCB2b2lkIDAgIT09IGUuYXR0cihcImFyaWEtdmFsdWVtYXhcIikpXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSB2b2lkIDAgIT09IGUuYXR0cihcIm1heFwiKSA/IGUuYXR0cihcIm1heFwiKSA6IGUuYXR0cihcImFyaWEtdmFsdWVtYXhcIik7XG4gICAgICAgICAgICAgICAgICAgIChjID0gXCJUb28gaGlnaDogTWF4aW11bSBvZiAnXCIgKyB2ICsgXCInPCEtLSBkYXRhLXZhbGlkYXRpb24tbWF4LW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YShcInZhbGlkYXRpb25NYXhNZXNzYWdlXCIpICYmIChjID0gZS5kYXRhKFwidmFsaWRhdGlvbk1heE1lc3NhZ2VcIikpLFxuICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YShcInZhbGlkYXRpb25NYXhNZXNzYWdlXCIsIGMpLFxuICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YShcInZhbGlkYXRpb25NYXhNYXhcIiwgdik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBlLmF0dHIoXCJtaW5cIikgfHwgdm9pZCAwICE9PSBlLmF0dHIoXCJhcmlhLXZhbHVlbWluXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0gdm9pZCAwICE9PSBlLmF0dHIoXCJtaW5cIikgPyBlLmF0dHIoXCJtaW5cIikgOiBlLmF0dHIoXCJhcmlhLXZhbHVlbWluXCIpO1xuICAgICAgICAgICAgICAgICAgICAoYyA9IFwiVG9vIGxvdzogTWluaW11bSBvZiAnXCIgKyBtICsgXCInPCEtLSBkYXRhLXZhbGlkYXRpb24tbWluLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YShcInZhbGlkYXRpb25NaW5NZXNzYWdlXCIpICYmIChjID0gZS5kYXRhKFwidmFsaWRhdGlvbk1pbk1lc3NhZ2VcIikpLFxuICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YShcInZhbGlkYXRpb25NaW5NZXNzYWdlXCIsIGMpLFxuICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YShcInZhbGlkYXRpb25NaW5NaW5cIiwgbSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGUuYXR0cihcIm1heGxlbmd0aFwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAoKGMgPSBcIlRvbyBsb25nOiBNYXhpbXVtIG9mICdcIiArIGUuYXR0cihcIm1heGxlbmd0aFwiKSArIFwiJyBjaGFyYWN0ZXJzPCEtLSBkYXRhLXZhbGlkYXRpb24tbWF4bGVuZ3RoLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCIpLFxuICAgICAgICAgICAgICAgICAgICBlLmRhdGEoXCJ2YWxpZGF0aW9uTWF4bGVuZ3RoTWVzc2FnZVwiKSAmJiAoYyA9IGUuZGF0YShcInZhbGlkYXRpb25NYXhsZW5ndGhNZXNzYWdlXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhKFwidmFsaWRhdGlvbk1heGxlbmd0aE1lc3NhZ2VcIiwgYyksXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YShcInZhbGlkYXRpb25NYXhsZW5ndGhNYXhsZW5ndGhcIiwgZS5hdHRyKFwibWF4bGVuZ3RoXCIpKSksXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gZS5hdHRyKFwibWlubGVuZ3RoXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgKChjID0gXCJUb28gc2hvcnQ6IE1pbmltdW0gb2YgJ1wiICsgZS5hdHRyKFwibWlubGVuZ3RoXCIpICsgXCInIGNoYXJhY3RlcnM8IS0tIGRhdGEtdmFsaWRhdGlvbi1taW5sZW5ndGgtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgZS5kYXRhKFwidmFsaWRhdGlvbk1pbmxlbmd0aE1lc3NhZ2VcIikgJiYgKGMgPSBlLmRhdGEoXCJ2YWxpZGF0aW9uTWlubGVuZ3RoTWVzc2FnZVwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgZS5kYXRhKFwidmFsaWRhdGlvbk1pbmxlbmd0aE1lc3NhZ2VcIiwgYyksXG4gICAgICAgICAgICAgICAgICAgICAgZS5kYXRhKFwidmFsaWRhdGlvbk1pbmxlbmd0aE1pbmxlbmd0aFwiLCBlLmF0dHIoXCJtaW5sZW5ndGhcIikpKSxcbiAgICAgICAgICAgICAgICAgICAgKHZvaWQgMCAhPT0gZS5hdHRyKFwicmVxdWlyZWRcIikgfHwgdm9pZCAwICE9PSBlLmF0dHIoXCJhcmlhLXJlcXVpcmVkXCIpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICgoYyA9IHIuYnVpbHRJblZhbGlkYXRvcnMucmVxdWlyZWQubWVzc2FnZSksIGUuZGF0YShcInZhbGlkYXRpb25SZXF1aXJlZE1lc3NhZ2VcIikgJiYgKGMgPSBlLmRhdGEoXCJ2YWxpZGF0aW9uUmVxdWlyZWRNZXNzYWdlXCIpKSwgZS5kYXRhKFwidmFsaWRhdGlvblJlcXVpcmVkTWVzc2FnZVwiLCBjKSksXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gZS5hdHRyKFwidHlwZVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgIFwibnVtYmVyXCIgPT09IGUuYXR0cihcInR5cGVcIikudG9Mb3dlckNhc2UoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICgoYyA9IHIuYnVpbHRJblZhbGlkYXRvcnMubnVtYmVyLm1lc3NhZ2UpLCBlLmRhdGEoXCJ2YWxpZGF0aW9uTnVtYmVyTWVzc2FnZVwiKSAmJiAoYyA9IGUuZGF0YShcInZhbGlkYXRpb25OdW1iZXJNZXNzYWdlXCIpKSwgZS5kYXRhKFwidmFsaWRhdGlvbk51bWJlck1lc3NhZ2VcIiwgYykpLFxuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGUuYXR0cihcInR5cGVcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICBcImVtYWlsXCIgPT09IGUuYXR0cihcInR5cGVcIikudG9Mb3dlckNhc2UoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICgoYyA9IFwiTm90IGEgdmFsaWQgZW1haWwgYWRkcmVzczwhLS0gZGF0YS12YWxpZGF0b3ItdmFsaWRlbWFpbC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBlLmRhdGEoXCJ2YWxpZGF0aW9uVmFsaWRlbWFpbE1lc3NhZ2VcIikgPyAoYyA9IGUuZGF0YShcInZhbGlkYXRpb25WYWxpZGVtYWlsTWVzc2FnZVwiKSkgOiBlLmRhdGEoXCJ2YWxpZGF0aW9uRW1haWxNZXNzYWdlXCIpICYmIChjID0gZS5kYXRhKFwidmFsaWRhdGlvbkVtYWlsTWVzc2FnZVwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgZS5kYXRhKFwidmFsaWRhdGlvblZhbGlkZW1haWxNZXNzYWdlXCIsIGMpKSxcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBlLmF0dHIoXCJtaW5jaGVja2VkXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgKChjID0gXCJOb3QgZW5vdWdoIG9wdGlvbnMgY2hlY2tlZDsgTWluaW11bSBvZiAnXCIgKyBlLmF0dHIoXCJtaW5jaGVja2VkXCIpICsgXCInIHJlcXVpcmVkPCEtLSBkYXRhLXZhbGlkYXRpb24tbWluY2hlY2tlZC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBlLmRhdGEoXCJ2YWxpZGF0aW9uTWluY2hlY2tlZE1lc3NhZ2VcIikgJiYgKGMgPSBlLmRhdGEoXCJ2YWxpZGF0aW9uTWluY2hlY2tlZE1lc3NhZ2VcIikpLFxuICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YShcInZhbGlkYXRpb25NaW5jaGVja2VkTWVzc2FnZVwiLCBjKSxcbiAgICAgICAgICAgICAgICAgICAgICBlLmRhdGEoXCJ2YWxpZGF0aW9uTWluY2hlY2tlZE1pbmNoZWNrZWRcIiwgZS5hdHRyKFwibWluY2hlY2tlZFwiKSkpLFxuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGUuYXR0cihcIm1heGNoZWNrZWRcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoKGMgPSBcIlRvbyBtYW55IG9wdGlvbnMgY2hlY2tlZDsgTWF4aW11bSBvZiAnXCIgKyBlLmF0dHIoXCJtYXhjaGVja2VkXCIpICsgXCInIHJlcXVpcmVkPCEtLSBkYXRhLXZhbGlkYXRpb24tbWF4Y2hlY2tlZC1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBlLmRhdGEoXCJ2YWxpZGF0aW9uTWF4Y2hlY2tlZE1lc3NhZ2VcIikgJiYgKGMgPSBlLmRhdGEoXCJ2YWxpZGF0aW9uTWF4Y2hlY2tlZE1lc3NhZ2VcIikpLFxuICAgICAgICAgICAgICAgICAgICAgIGUuZGF0YShcInZhbGlkYXRpb25NYXhjaGVja2VkTWVzc2FnZVwiLCBjKSxcbiAgICAgICAgICAgICAgICAgICAgICBlLmRhdGEoXCJ2YWxpZGF0aW9uTWF4Y2hlY2tlZE1heGNoZWNrZWRcIiwgZS5hdHRyKFwibWF4Y2hlY2tlZFwiKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGUuZGF0YShcInZhbGlkYXRpb25cIikgJiYgKHMgPSBlLmRhdGEoXCJ2YWxpZGF0aW9uXCIpLnNwbGl0KFwiLFwiKSksXG4gICAgICAgICAgICAgICAgICBhLmVhY2goZS5kYXRhKCksIGZ1bmN0aW9uIChhLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gYS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiLCQxXCIpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWxpZGF0aW9uXCIgPT09IGVbMF0gJiYgZVsxXSAmJiBzLnB1c2goZVsxXSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgdSA9IHMsXG4gICAgICAgICAgICAgICAgICBnID0gW107XG4gICAgICAgICAgICAgICAgZG9cbiAgICAgICAgICAgICAgICAgIGEuZWFjaChzLCBmdW5jdGlvbiAoYSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBzW2FdID0gaSh0KTtcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAocyA9IGEudW5pcXVlKHMpKSxcbiAgICAgICAgICAgICAgICAgICAgKGcgPSBbXSksXG4gICAgICAgICAgICAgICAgICAgIGEuZWFjaCh1LCBmdW5jdGlvbiAodCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGUuZGF0YShcInZhbGlkYXRpb25cIiArIG4gKyBcIlNob3J0Y3V0XCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYS5lYWNoKGUuZGF0YShcInZhbGlkYXRpb25cIiArIG4gKyBcIlNob3J0Y3V0XCIpLnNwbGl0KFwiLFwiKSwgZnVuY3Rpb24gKGEsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZy5wdXNoKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoci5idWlsdEluVmFsaWRhdG9yc1tuLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHIuYnVpbHRJblZhbGlkYXRvcnNbbi50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvcnRjdXRcIiA9PT0gby50eXBlLnRvTG93ZXJDYXNlKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYS5lYWNoKG8uc2hvcnRjdXQuc3BsaXQoXCIsXCIpLCBmdW5jdGlvbiAoYSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ID0gaSh0KSksIGcucHVzaCh0KSwgcy5wdXNoKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAodSA9IGcpO1xuICAgICAgICAgICAgICAgIHdoaWxlICh1Lmxlbmd0aCA+IDApO1xuICAgICAgICAgICAgICAgIHZhciBoID0ge307XG4gICAgICAgICAgICAgICAgYS5lYWNoKHMsIGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbyA9IGUuZGF0YShcInZhbGlkYXRpb25cIiArIG4gKyBcIk1lc3NhZ2VcIiksXG4gICAgICAgICAgICAgICAgICAgIGwgPSB2b2lkIDAgIT09IG8sXG4gICAgICAgICAgICAgICAgICAgIGQgPSAhMTtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKChvID0gbyB8fCBcIidcIiArIG4gKyBcIicgdmFsaWRhdGlvbiBmYWlsZWQgPCEtLSBBZGQgYXR0cmlidXRlICdkYXRhLXZhbGlkYXRpb24tXCIgKyBuLnRvTG93ZXJDYXNlKCkgKyBcIi1tZXNzYWdlJyB0byBpbnB1dCB0byBjaGFuZ2UgdGhpcyBtZXNzYWdlIC0tPlwiKSxcbiAgICAgICAgICAgICAgICAgICAgYS5lYWNoKHIudmFsaWRhdG9yVHlwZXMsIGZ1bmN0aW9uICh0LCByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBoW3RdICYmIChoW3RdID0gW10pLCBkIHx8IHZvaWQgMCA9PT0gZS5kYXRhKFwidmFsaWRhdGlvblwiICsgbiArIGkoci5uYW1lKSkgfHwgKGhbdF0ucHVzaChhLmV4dGVuZCghMCwgeyBuYW1lOiBpKHIubmFtZSksIG1lc3NhZ2U6IG8gfSwgci5pbml0KGUsIG4pKSksIChkID0gITApKTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICFkICYmIHIuYnVpbHRJblZhbGlkYXRvcnNbbi50b0xvd2VyQ2FzZSgpXSlcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGEuZXh0ZW5kKCEwLCB7fSwgci5idWlsdEluVmFsaWRhdG9yc1tuLnRvTG93ZXJDYXNlKCldKTtcbiAgICAgICAgICAgICAgICAgICAgbCAmJiAocy5tZXNzYWdlID0gbyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gcy50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIFwic2hvcnRjdXRcIiA9PT0gY1xuICAgICAgICAgICAgICAgICAgICAgID8gKGQgPSAhMClcbiAgICAgICAgICAgICAgICAgICAgICA6IGEuZWFjaChyLnZhbGlkYXRvclR5cGVzLCBmdW5jdGlvbiAodCwgbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGhbdF0gJiYgKGhbdF0gPSBbXSksIGQgfHwgYyAhPT0gdC50b0xvd2VyQ2FzZSgpIHx8IChlLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyBuICsgaShvLm5hbWUpLCBzW28ubmFtZS50b0xvd2VyQ2FzZSgpXSksIGhbY10ucHVzaChhLmV4dGVuZChzLCBvLmluaXQoZSwgbikpKSwgKGQgPSAhMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBkIHx8IGEuZXJyb3IoXCJDYW5ub3QgZmluZCB2YWxpZGF0aW9uIGluZm8gZm9yICdcIiArIG4gKyBcIidcIik7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBsLmRhdGEoXCJvcmlnaW5hbC1jb250ZW50c1wiLCBsLmRhdGEoXCJvcmlnaW5hbC1jb250ZW50c1wiKSA/IGwuZGF0YShcIm9yaWdpbmFsLWNvbnRlbnRzXCIpIDogbC5odG1sKCkpLFxuICAgICAgICAgICAgICAgICAgbC5kYXRhKFwib3JpZ2luYWwtcm9sZVwiLCBsLmRhdGEoXCJvcmlnaW5hbC1yb2xlXCIpID8gbC5kYXRhKFwib3JpZ2luYWwtcm9sZVwiKSA6IGwuYXR0cihcInJvbGVcIikpLFxuICAgICAgICAgICAgICAgICAgby5kYXRhKFwib3JpZ2luYWwtY2xhc3Nlc1wiLCBvLmRhdGEoXCJvcmlnaW5hbC1jbGFzZXNcIikgPyBvLmRhdGEoXCJvcmlnaW5hbC1jbGFzc2VzXCIpIDogby5hdHRyKFwiY2xhc3NcIikpLFxuICAgICAgICAgICAgICAgICAgZS5kYXRhKFwib3JpZ2luYWwtYXJpYS1pbnZhbGlkXCIsIGUuZGF0YShcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiKSA/IGUuZGF0YShcIm9yaWdpbmFsLWFyaWEtaW52YWxpZFwiKSA6IGUuYXR0cihcImFyaWEtaW52YWxpZFwiKSksXG4gICAgICAgICAgICAgICAgICBlLmJpbmQoXCJ2YWxpZGF0aW9uLnZhbGlkYXRpb25cIiwgZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBuKGUpLFxuICAgICAgICAgICAgICAgICAgICAgIGwgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICBhLmVhY2goaCwgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChvIHx8IChpICYmIGkuaW5jbHVkZUVtcHR5KSB8fCAoci52YWxpZGF0b3JUeXBlc1t0XS5ibG9ja1N1Ym1pdCAmJiBpICYmIGkuc3VibWl0dGluZykpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGEuZWFjaChuLCBmdW5jdGlvbiAoYSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudmFsaWRhdG9yVHlwZXNbdF0udmFsaWRhdGUoZSwgbywgaSkgJiYgbC5wdXNoKGkubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIGxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgZS5iaW5kKFwiZ2V0VmFsaWRhdG9ycy52YWxpZGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIGUuYmluZChcInN1Ym1pdC52YWxpZGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUudHJpZ2dlckhhbmRsZXIoXCJjaGFuZ2UudmFsaWRhdGlvblwiLCB7IHN1Ym1pdHRpbmc6ICEwIH0pO1xuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBlLmJpbmQoXCJrZXl1cC52YWxpZGF0aW9uIGZvY3VzLnZhbGlkYXRpb24gYmx1ci52YWxpZGF0aW9uIGNsaWNrLnZhbGlkYXRpb24ga2V5ZG93bi52YWxpZGF0aW9uIGtleXByZXNzLnZhbGlkYXRpb24gY2hhbmdlLnZhbGlkYXRpb25cIiwgZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBuKGUpLFxuICAgICAgICAgICAgICAgICAgICAgIGMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgby5maW5kKFwiaW5wdXQsdGV4dGFyZWEsc2VsZWN0XCIpLmVhY2goZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIChhLmVhY2goYShuKS50cmlnZ2VySGFuZGxlcihcInZhbGlkYXRpb24udmFsaWRhdGlvblwiLCBpKSwgZnVuY3Rpb24gKGEsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYy5wdXNoKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxlbmd0aCA+IG8pXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgYShuKS5hdHRyKFwiYXJpYS1pbnZhbGlkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gZS5kYXRhKFwib3JpZ2luYWwtYXJpYS1pbnZhbGlkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYShuKS5hdHRyKFwiYXJpYS1pbnZhbGlkXCIsIHZvaWQgMCAhPT0gciAmJiByKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIGRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXQsc2VsZWN0LHRleHRhcmVhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAubm90KGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAubm90KCdbbmFtZT1cIicgKyBlLmF0dHIoXCJuYW1lXCIpICsgJ1wiXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpZ2dlcihcInZhbGlkYXRpb25Mb3N0Rm9jdXMudmFsaWRhdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAoYyA9IGEudW5pcXVlKGMuc29ydCgpKSkubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChvLnJlbW92ZUNsYXNzKFwic3VjY2VzcyBlcnJvclwiKS5hZGRDbGFzcyhcIndhcm5pbmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHIub3B0aW9ucy5zZW1hbnRpY2FsbHlTdHJpY3QgJiYgMSA9PT0gYy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGwuaHRtbChjWzBdICsgKHIub3B0aW9ucy5wcmVwZW5kRXhpc3RpbmdIZWxwQmxvY2sgPyBsLmRhdGEoXCJvcmlnaW5hbC1jb250ZW50c1wiKSA6IFwiXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbC5odG1sKCc8dWwgcm9sZT1cImFsZXJ0XCI+PGxpPicgKyBjLmpvaW4oXCI8L2xpPjxsaT5cIikgKyBcIjwvbGk+PC91bD5cIiArIChyLm9wdGlvbnMucHJlcGVuZEV4aXN0aW5nSGVscEJsb2NrID8gbC5kYXRhKFwib3JpZ2luYWwtY29udGVudHNcIikgOiBcIlwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChvLnJlbW92ZUNsYXNzKFwid2FybmluZyBlcnJvciBzdWNjZXNzXCIpLCBzLmxlbmd0aCA+IDAgJiYgby5hZGRDbGFzcyhcInN1Y2Nlc3NcIiksIGwuaHRtbChsLmRhdGEoXCJvcmlnaW5hbC1jb250ZW50c1wiKSkpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYmx1clwiID09PSB0LnR5cGUgJiYgby5yZW1vdmVDbGFzcyhcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIGUuYmluZChcInZhbGlkYXRpb25Mb3N0Rm9jdXMudmFsaWRhdGlvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG8ucmVtb3ZlQ2xhc3MoXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBlID0gYSh0aGlzKSxcbiAgICAgICAgICAgICAgICBpID0gZS5wYXJlbnRzKFwiLmZvcm0tZ3JvdXBcIikuZmlyc3QoKSxcbiAgICAgICAgICAgICAgICBuID0gaS5maW5kKFwiLmhlbHAtYmxvY2tcIikuZmlyc3QoKTtcbiAgICAgICAgICAgICAgZS51bmJpbmQoXCIudmFsaWRhdGlvblwiKSxcbiAgICAgICAgICAgICAgICBuLmh0bWwobi5kYXRhKFwib3JpZ2luYWwtY29udGVudHNcIikpLFxuICAgICAgICAgICAgICAgIGkuYXR0cihcImNsYXNzXCIsIGkuZGF0YShcIm9yaWdpbmFsLWNsYXNzZXNcIikpLFxuICAgICAgICAgICAgICAgIGUuYXR0cihcImFyaWEtaW52YWxpZFwiLCBlLmRhdGEoXCJvcmlnaW5hbC1hcmlhLWludmFsaWRcIikpLFxuICAgICAgICAgICAgICAgIG4uYXR0cihcInJvbGVcIiwgZS5kYXRhKFwib3JpZ2luYWwtcm9sZVwiKSksXG4gICAgICAgICAgICAgICAgdC5pbmRleE9mKG5bMF0pID4gLTEgJiYgbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29sbGVjdEVycm9yczogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHZhciBlID0ge307XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGEoaSksXG4gICAgICAgICAgICAgICAgICBvID0gbi5hdHRyKFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgIHIgPSBuLnRyaWdnZXJIYW5kbGVyKFwidmFsaWRhdGlvbi52YWxpZGF0aW9uXCIsIHsgaW5jbHVkZUVtcHR5OiAhMCB9KTtcbiAgICAgICAgICAgICAgICBlW29dID0gYS5leHRlbmQoITAsIHIsIGVbb10pO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgYS5lYWNoKGUsIGZ1bmN0aW9uIChhLCB0KSB7XG4gICAgICAgICAgICAgICAgMCA9PT0gdC5sZW5ndGggJiYgZGVsZXRlIGVbYV07XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGFzRXJyb3JzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgICAgICAgICAgdCA9IHQuY29uY2F0KGEoaSkudHJpZ2dlckhhbmRsZXIoXCJnZXRWYWxpZGF0b3JzLnZhbGlkYXRpb25cIikgPyBhKGkpLnRyaWdnZXJIYW5kbGVyKFwidmFsaWRhdGlvbi52YWxpZGF0aW9uXCIsIHsgc3VibWl0dGluZzogITAgfSkgOiBbXSk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB0Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvdmVycmlkZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGUgPSBhLmV4dGVuZCghMCwgZSwgdCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWRhdG9yVHlwZXM6IHtcbiAgICAgICAgICBjYWxsYmFjazoge1xuICAgICAgICAgICAgbmFtZTogXCJjYWxsYmFja1wiLFxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGEsIHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWRhdG9yTmFtZTogdCwgY2FsbGJhY2s6IGEuZGF0YShcInZhbGlkYXRpb25cIiArIHQgKyBcIkNhbGxiYWNrXCIpLCBsYXN0VmFsdWU6IGEudmFsKCksIGxhc3RWYWxpZDogITAsIGxhc3RGaW5pc2hlZDogITAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKGEsIHQsIGUpIHtcbiAgICAgICAgICAgICAgaWYgKGUubGFzdFZhbHVlID09PSB0ICYmIGUubGFzdEZpbmlzaGVkKSByZXR1cm4gIWUubGFzdFZhbGlkO1xuICAgICAgICAgICAgICAvLyBkZWVwY29kZSBpZ25vcmUgT3BlcmF0b3JQcmVjZWRlbmNlOiA8cGxlYXNlIHNwZWNpZnkgYSByZWFzb24gb2YgaWdub3JpbmcgdGhpcz5cbiAgICAgICAgICAgICAgaWYgKCEwID09PSBlLmxhc3RGaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIChlLmxhc3RWYWx1ZSA9IHQpLCAoZS5sYXN0VmFsaWQgPSAhMCksIChlLmxhc3RGaW5pc2hlZCA9ICExKTtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGUsXG4gICAgICAgICAgICAgICAgICBuID0gYTtcbiAgICAgICAgICAgICAgICAhKGZ1bmN0aW9uIGEodCwgZSkge1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuc3BsaWNlKDIpLCBuID0gdC5zcGxpdChcIi5cIiksIG8gPSBuLnBvcCgpLCByID0gMDsgciA8IG4ubGVuZ3RoOyByKyspIGUgPSBlW25bcl1dO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVbb10uYXBwbHkodGhpcywgaSk7XG4gICAgICAgICAgICAgICAgfSkoZS5jYWxsYmFjaywgd2luZG93LCBhLCB0LCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgICAgaS5sYXN0VmFsdWUgPT09IGEudmFsdWUgJiZcbiAgICAgICAgICAgICAgICAgICAgKChpLmxhc3RWYWxpZCA9IGEudmFsaWQpLFxuICAgICAgICAgICAgICAgICAgICBhLm1lc3NhZ2UgJiYgKGkubWVzc2FnZSA9IGEubWVzc2FnZSksXG4gICAgICAgICAgICAgICAgICAgIChpLmxhc3RGaW5pc2hlZCA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgbi5kYXRhKFwidmFsaWRhdGlvblwiICsgaS52YWxpZGF0b3JOYW1lICsgXCJNZXNzYWdlXCIsIGkubWVzc2FnZSksXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIG4udHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFqYXg6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiYWpheFwiLFxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGEsIHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWRhdG9yTmFtZTogdCwgdXJsOiBhLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyB0ICsgXCJBamF4XCIpLCBsYXN0VmFsdWU6IGEudmFsKCksIGxhc3RWYWxpZDogITAsIGxhc3RGaW5pc2hlZDogITAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKHQsIGUsIGkpIHtcbiAgICAgICAgICAgICAgLy8gZGVlcGNvZGUgaWdub3JlIE9wZXJhdG9yUHJlY2VkZW5jZTogPHBsZWFzZSBzcGVjaWZ5IGEgcmVhc29uIG9mIGlnbm9yaW5nIHRoaXM+XG4gICAgICAgICAgICAgIHJldHVybiBcIlwiICsgaS5sYXN0VmFsdWUgPT0gXCJcIiArIGUgJiYgITAgPT09IGkubGFzdEZpbmlzaGVkXG4gICAgICAgICAgICAgICAgLy8gZGVlcGNvZGUgaWdub3JlIE9wZXJhdG9yUHJlY2VkZW5jZTogPHBsZWFzZSBzcGVjaWZ5IGEgcmVhc29uIG9mIGlnbm9yaW5nIHRoaXM+XG4gICAgICAgICAgICAgICAgPyAhMSA9PT0gaS5sYXN0VmFsaWRcbiAgICAgICAgICAgICAgICAvLyBkZWVwY29kZSBpZ25vcmUgT3BlcmF0b3JQcmVjZWRlbmNlOiA8cGxlYXNlIHNwZWNpZnkgYSByZWFzb24gb2YgaWdub3JpbmcgdGhpcz5cbiAgICAgICAgICAgICAgICA6ICghMCA9PT0gaS5sYXN0RmluaXNoZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgKChpLmxhc3RWYWx1ZSA9IGUpLFxuICAgICAgICAgICAgICAgICAgICAoaS5sYXN0VmFsaWQgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgIChpLmxhc3RGaW5pc2hlZCA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgYS5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IGkudXJsLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFwidmFsdWU9XCIgKyBlICsgXCImZmllbGQ9XCIgKyB0LmF0dHIoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiArIGkubGFzdFZhbHVlID09IFwiXCIgKyBhLnZhbHVlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoaS5sYXN0VmFsaWQgPSAhIWEudmFsaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhLm1lc3NhZ2UgJiYgKGkubWVzc2FnZSA9IGEubWVzc2FnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChpLmxhc3RGaW5pc2hlZCA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdC5kYXRhKFwidmFsaWRhdGlvblwiICsgaS52YWxpZGF0b3JOYW1lICsgXCJNZXNzYWdlXCIsIGkubWVzc2FnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoaS5sYXN0VmFsaWQgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChpLm1lc3NhZ2UgPSBcImFqYXggY2FsbCBmYWlsZWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChpLmxhc3RGaW5pc2hlZCA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdC5kYXRhKFwidmFsaWRhdGlvblwiICsgaS52YWxpZGF0b3JOYW1lICsgXCJNZXNzYWdlXCIsIGkubWVzc2FnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAhMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnZXg6IHtcbiAgICAgICAgICAgIG5hbWU6IFwicmVnZXhcIixcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChhLCB0KSB7XG4gICAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgICByZXR1cm4geyByZWdleDogKChlID0gYS5kYXRhKFwidmFsaWRhdGlvblwiICsgdCArIFwiUmVnZXhcIikpLCBSZWdFeHAoXCJeXCIgKyBlICsgXCIkXCIpKSB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoYSwgdCwgZSkge1xuICAgICAgICAgICAgICByZXR1cm4gKCFlLnJlZ2V4LnRlc3QodCkgJiYgIWUubmVnYXRpdmUpIHx8IChlLnJlZ2V4LnRlc3QodCkgJiYgZS5uZWdhdGl2ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChhLCB0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKGEsIHQsIGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICEhKDAgPT09IHQubGVuZ3RoICYmICFlLm5lZ2F0aXZlKSB8fCAhISh0Lmxlbmd0aCA+IDAgJiYgZS5uZWdhdGl2ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmxvY2tTdWJtaXQ6ICEwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgIG5hbWU6IFwibWF0Y2hcIixcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChhLCB0KSB7XG4gICAgICAgICAgICAgIHZhciBlID0gYVxuICAgICAgICAgICAgICAgIC5wYXJlbnRzKFwiZm9ybVwiKVxuICAgICAgICAgICAgICAgIC5maXJzdCgpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ1tuYW1lPVwiJyArIGEuZGF0YShcInZhbGlkYXRpb25cIiArIHQgKyBcIk1hdGNoXCIpICsgJ1wiXScpXG4gICAgICAgICAgICAgICAgLmZpcnN0KCk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZS5iaW5kKFwidmFsaWRhdGlvbi52YWxpZGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGEudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIsIHsgc3VibWl0dGluZzogITAgfSk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgeyBlbGVtZW50OiBlIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKGEsIHQsIGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICh0ICE9PSBlLmVsZW1lbnQudmFsKCkgJiYgIWUubmVnYXRpdmUpIHx8ICh0ID09PSBlLmVsZW1lbnQudmFsKCkgJiYgZS5uZWdhdGl2ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmxvY2tTdWJtaXQ6ICEwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICBuYW1lOiBcIm1heFwiLFxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGEsIHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgbWF4OiBhLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyB0ICsgXCJNYXhcIikgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKGEsIHQsIGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChwYXJzZUZsb2F0KHQsIDEwKSA+IHBhcnNlRmxvYXQoZS5tYXgsIDEwKSAmJiAhZS5uZWdhdGl2ZSkgfHwgKHBhcnNlRmxvYXQodCwgMTApIDw9IHBhcnNlRmxvYXQoZS5tYXgsIDEwKSAmJiBlLm5lZ2F0aXZlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtaW46IHtcbiAgICAgICAgICAgIG5hbWU6IFwibWluXCIsXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoYSwgdCkge1xuICAgICAgICAgICAgICByZXR1cm4geyBtaW46IGEuZGF0YShcInZhbGlkYXRpb25cIiArIHQgKyBcIk1pblwiKSB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoYSwgdCwgZSkge1xuICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlRmxvYXQodCkgPCBwYXJzZUZsb2F0KGUubWluKSAmJiAhZS5uZWdhdGl2ZSkgfHwgKHBhcnNlRmxvYXQodCkgPj0gcGFyc2VGbG9hdChlLm1pbikgJiYgZS5uZWdhdGl2ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWF4bGVuZ3RoOiB7XG4gICAgICAgICAgICBuYW1lOiBcIm1heGxlbmd0aFwiLFxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGEsIHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgbWF4bGVuZ3RoOiBhLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyB0ICsgXCJNYXhsZW5ndGhcIikgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKGEsIHQsIGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICh0Lmxlbmd0aCA+IGUubWF4bGVuZ3RoICYmICFlLm5lZ2F0aXZlKSB8fCAodC5sZW5ndGggPD0gZS5tYXhsZW5ndGggJiYgZS5uZWdhdGl2ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWlubGVuZ3RoOiB7XG4gICAgICAgICAgICBuYW1lOiBcIm1pbmxlbmd0aFwiLFxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGEsIHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgbWlubGVuZ3RoOiBhLmRhdGEoXCJ2YWxpZGF0aW9uXCIgKyB0ICsgXCJNaW5sZW5ndGhcIikgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKGEsIHQsIGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICh0Lmxlbmd0aCA8IGUubWlubGVuZ3RoICYmICFlLm5lZ2F0aXZlKSB8fCAodC5sZW5ndGggPj0gZS5taW5sZW5ndGggJiYgZS5uZWdhdGl2ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWF4Y2hlY2tlZDoge1xuICAgICAgICAgICAgbmFtZTogXCJtYXhjaGVja2VkXCIsXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoYSwgdCkge1xuICAgICAgICAgICAgICB2YXIgZSA9IGFcbiAgICAgICAgICAgICAgICAucGFyZW50cyhcImZvcm1cIilcbiAgICAgICAgICAgICAgICAuZmlyc3QoKVxuICAgICAgICAgICAgICAgIC5maW5kKCdbbmFtZT1cIicgKyBhLmF0dHIoXCJuYW1lXCIpICsgJ1wiXScpO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGUuYmluZChcImNsaWNrLnZhbGlkYXRpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgYS50cmlnZ2VyKFwiY2hhbmdlLnZhbGlkYXRpb25cIiwgeyBpbmNsdWRlRW1wdHk6ICEwIH0pO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHsgbWF4Y2hlY2tlZDogYS5kYXRhKFwidmFsaWRhdGlvblwiICsgdCArIFwiTWF4Y2hlY2tlZFwiKSwgZWxlbWVudHM6IGUgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoYSwgdCwgZSkge1xuICAgICAgICAgICAgICByZXR1cm4gKGUuZWxlbWVudHMuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID4gZS5tYXhjaGVja2VkICYmICFlLm5lZ2F0aXZlKSB8fCAoZS5lbGVtZW50cy5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGggPD0gZS5tYXhjaGVja2VkICYmIGUubmVnYXRpdmUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJsb2NrU3VibWl0OiAhMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1pbmNoZWNrZWQ6IHtcbiAgICAgICAgICAgIG5hbWU6IFwibWluY2hlY2tlZFwiLFxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGEsIHQpIHtcbiAgICAgICAgICAgICAgdmFyIGUgPSBhXG4gICAgICAgICAgICAgICAgLnBhcmVudHMoXCJmb3JtXCIpXG4gICAgICAgICAgICAgICAgLmZpcnN0KClcbiAgICAgICAgICAgICAgICAuZmluZCgnW25hbWU9XCInICsgYS5hdHRyKFwibmFtZVwiKSArICdcIl0nKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBlLmJpbmQoXCJjbGljay52YWxpZGF0aW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGEudHJpZ2dlcihcImNoYW5nZS52YWxpZGF0aW9uXCIsIHsgaW5jbHVkZUVtcHR5OiAhMCB9KTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB7IG1pbmNoZWNrZWQ6IGEuZGF0YShcInZhbGlkYXRpb25cIiArIHQgKyBcIk1pbmNoZWNrZWRcIiksIGVsZW1lbnRzOiBlIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKGEsIHQsIGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChlLmVsZW1lbnRzLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aCA8IGUubWluY2hlY2tlZCAmJiAhZS5uZWdhdGl2ZSkgfHwgKGUuZWxlbWVudHMuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoID49IGUubWluY2hlY2tlZCAmJiBlLm5lZ2F0aXZlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBibG9ja1N1Ym1pdDogITAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYnVpbHRJblZhbGlkYXRvcnM6IHtcbiAgICAgICAgICBlbWFpbDogeyBuYW1lOiBcIkVtYWlsXCIsIHR5cGU6IFwic2hvcnRjdXRcIiwgc2hvcnRjdXQ6IFwidmFsaWRlbWFpbFwiIH0sXG4gICAgICAgICAgdmFsaWRlbWFpbDogeyBuYW1lOiBcIlZhbGlkZW1haWxcIiwgdHlwZTogXCJyZWdleFwiLCByZWdleDogXCJbQS1aYS16MC05Ll8lKy1dK0BbQS1aYS16MC05Li1dK1xcXFwuW0EtWmEtel17Miw0fVwiLCBtZXNzYWdlOiBcIk5vdCBhIHZhbGlkIGVtYWlsIGFkZHJlc3M8IS0tIGRhdGEtdmFsaWRhdG9yLXZhbGlkZW1haWwtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIiB9LFxuICAgICAgICAgIHBhc3N3b3JkYWdhaW46IHsgbmFtZTogXCJQYXNzd29yZGFnYWluXCIsIHR5cGU6IFwibWF0Y2hcIiwgbWF0Y2g6IFwicGFzc3dvcmRcIiwgbWVzc2FnZTogXCJEb2VzIG5vdCBtYXRjaCB0aGUgZ2l2ZW4gcGFzc3dvcmQ8IS0tIGRhdGEtdmFsaWRhdG9yLXBhc3dvcmRhZ2Fpbi1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiIH0sXG4gICAgICAgICAgcG9zaXRpdmU6IHsgbmFtZTogXCJQb3NpdGl2ZVwiLCB0eXBlOiBcInNob3J0Y3V0XCIsIHNob3J0Y3V0OiBcIm51bWJlcixwb3NpdGl2ZW51bWJlclwiIH0sXG4gICAgICAgICAgbmVnYXRpdmU6IHsgbmFtZTogXCJOZWdhdGl2ZVwiLCB0eXBlOiBcInNob3J0Y3V0XCIsIHNob3J0Y3V0OiBcIm51bWJlcixuZWdhdGl2ZW51bWJlclwiIH0sXG4gICAgICAgICAgbnVtYmVyOiB7IG5hbWU6IFwiTnVtYmVyXCIsIHR5cGU6IFwicmVnZXhcIiwgcmVnZXg6IFwiKFsrLV0/XFxcXGQrKFxcXFwuXFxcXGQqKT8oW2VFXVsrLV0/WzAtOV0rKT8pP1wiLCBtZXNzYWdlOiBcIk11c3QgYmUgYSBudW1iZXI8IS0tIGRhdGEtdmFsaWRhdG9yLW51bWJlci1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiIH0sXG4gICAgICAgICAgaW50ZWdlcjogeyBuYW1lOiBcIkludGVnZXJcIiwgdHlwZTogXCJyZWdleFwiLCByZWdleDogXCJbKy1dP1xcXFxkK1wiLCBtZXNzYWdlOiBcIk5vIGRlY2ltYWwgcGxhY2VzIGFsbG93ZWQ8IS0tIGRhdGEtdmFsaWRhdG9yLWludGVnZXItbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIiB9LFxuICAgICAgICAgIHBvc2l0aXZlbnVtYmVyOiB7IG5hbWU6IFwiUG9zaXRpdmVudW1iZXJcIiwgdHlwZTogXCJtaW5cIiwgbWluOiAwLCBtZXNzYWdlOiBcIk11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXI8IS0tIGRhdGEtdmFsaWRhdG9yLXBvc2l0aXZlbnVtYmVyLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCIgfSxcbiAgICAgICAgICBuZWdhdGl2ZW51bWJlcjogeyBuYW1lOiBcIk5lZ2F0aXZlbnVtYmVyXCIsIHR5cGU6IFwibWF4XCIsIG1heDogMCwgbWVzc2FnZTogXCJNdXN0IGJlIGEgbmVnYXRpdmUgbnVtYmVyPCEtLSBkYXRhLXZhbGlkYXRvci1uZWdhdGl2ZW51bWJlci1tZXNzYWdlIHRvIG92ZXJyaWRlIC0tPlwiIH0sXG4gICAgICAgICAgcmVxdWlyZWQ6IHsgbmFtZTogXCJSZXF1aXJlZFwiLCB0eXBlOiBcInJlcXVpcmVkXCIsIG1lc3NhZ2U6IFwiVGhpcyBpcyByZXF1aXJlZDwhLS0gZGF0YS12YWxpZGF0b3ItcmVxdWlyZWQtbWVzc2FnZSB0byBvdmVycmlkZSAtLT5cIiB9LFxuICAgICAgICAgIGNoZWNrb25lOiB7IG5hbWU6IFwiQ2hlY2tvbmVcIiwgdHlwZTogXCJtaW5jaGVja2VkXCIsIG1pbmNoZWNrZWQ6IDEsIG1lc3NhZ2U6IFwiQ2hlY2sgYXQgbGVhc3Qgb25lIG9wdGlvbjwhLS0gZGF0YS12YWxpZGF0aW9uLWNoZWNrb25lLW1lc3NhZ2UgdG8gb3ZlcnJpZGUgLS0+XCIgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBpID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGEudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oXnxcXHMpKFthLXpdKS9nLCBmdW5jdGlvbiAoYSwgdCwgZSkge1xuICAgICAgICAgIHJldHVybiB0ICsgZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBuID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0LnZhbCgpLFxuICAgICAgICAgIGkgPSB0LmF0dHIoXCJ0eXBlXCIpO1xuICAgICAgICByZXR1cm4gXCJjaGVja2JveFwiID09PSBpICYmIChlID0gdC5pcyhcIjpjaGVja2VkXCIpID8gZSA6IFwiXCIpLCBcInJhZGlvXCIgPT09IGkgJiYgKGUgPSBhKCdpbnB1dFtuYW1lPVwiJyArIHQuYXR0cihcIm5hbWVcIikgKyAnXCJdOmNoZWNrZWQnKS5sZW5ndGggPiAwID8gZSA6IFwiXCIpLCBlO1xuICAgICAgfTtcbiAgICAoYS5mbi5qcUJvb3RzdHJhcFZhbGlkYXRpb24gPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGUubWV0aG9kc1t0XVxuICAgICAgICA/IGUubWV0aG9kc1t0XS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxuICAgICAgICA6IFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgJiYgdFxuICAgICAgICA/IChhLmVycm9yKFwiTWV0aG9kIFwiICsgdCArIFwiIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5qcUJvb3RzdHJhcFZhbGlkYXRpb25cIiksIG51bGwpXG4gICAgICAgIDogZS5tZXRob2RzLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9KSxcbiAgICAgIChhLmpxQm9vdHN0cmFwVmFsaWRhdGlvbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGEoXCI6aW5wdXRcIikubm90KFwiW3R5cGU9aW1hZ2VdLFt0eXBlPXN1Ym1pdF1cIikuanFCb290c3RyYXBWYWxpZGF0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgfSkoalF1ZXJ5KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDZixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFD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
