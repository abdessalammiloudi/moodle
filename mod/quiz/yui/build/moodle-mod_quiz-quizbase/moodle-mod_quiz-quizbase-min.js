YUI.add("moodle-mod_quiz-quizbase",function(e,t){var n="mod_quiz-quizbase",r=function(){r.superclass.constructor.apply(this,arguments)};e.extend(r,e.Base,{registermodules:[],register_module:function(e){return this.registermodules.push(e),this},invoke_function:function(e,t){var n;for(n in this.registermodules)e in this.registermodules[n]&&this.registermodules[n][e](t);return this}},{NAME:n,ATTRS:{}}),M.mod_quiz=M.mod_quiz||{},M.mod_quiz.quizbase=M.mod_quiz.quizbase||new r,M.mod_quiz.edit=M.mod_quiz.edit||{},M.mod_quiz.edit.swap_sections=function(e,t,n){var r={COURSECONTENT:"mod-quiz-edit-content",SECTIONADDMENUS:"section_add_menus"},i=e.Node.all("."+r.COURSECONTENT+" li.section");i.item(t).one("."+r.SECTIONADDMENUS).swap(i.item(n).one("."+r.SECTIONADDMENUS))},M.mod_quiz.edit.process_sections=function(e,t,n,r,i){var s={SECTIONNAME:"sectionname"},o={SECTIONLEFTSIDE:".left .section-handle .icon"};if(n.action==="move"){if(r>i){var u=i;i=r,r=u}var a,f,l,c;for(var h=r;h<=i;h++)t.item(h).one("."+s.SECTIONNAME).setContent(n.sectiontitles[h]),a=t.item(h).one(o.SECTIONLEFTSIDE),f=a.getAttribute("alt"),l=f.lastIndexOf(" "),c=f.substr(0,l+1)+h,a.setAttribute("alt",c),a.setAttribute("title",c),t.item(h).removeClass("current");n.current!==-1&&t.item(n.current).addClass("current")}}},"@VERSION@",{requires:["base","node"]});
