var FootballStar;
! function(t) {
	var e = function() {
		function t() {}
		return t.GAMEE = !0, t.REBRAND = !1, t.FACEBOOK = !1, t.game = null, t.paralax = !0, t.GAME_WIDTH = 640, t.GAME_HEIGHT = 640, t.MAX_GAME_WIDTH = 640, t.MAX_GAME_HEIGHT = 640, t.scaleX = 1, t.scaleY = 1, t.correctOrientation = !1, t.musicOn = !0, t.soundOn = !0, t.showLanguages = !1, t.supportedLanguages = ["en"], t.currentLanguage = "en", t
	}();
	t.Global = e
}(FootballStar || (FootballStar = {})), FootballStar.Global.FACEBOOK ? window.FBInstant.initializeAsync().then(function() {
	var t = new FootballStar.Game;
	FootballStar.Global.game = t
}) : window.onload = function() {
	var t = new Gamee.Gamee(FootballStar.Global.GAMEE, "OneButton", !0),
		e = new FootballStar.Game;
	FootballStar.Global.game = e, t.setGame(e)
};
var __extends = this && this.__extends || function(t, e) {
		function i() {
			this.constructor = t
		}
		for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
		t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
	},
	FootballStar;
! function(t) {
	var e = function(e) {
		function i() {
			var a = (window.innerWidth, window.innerHeight, Phaser.AUTO),
				s = navigator.userAgent.toLowerCase(),
				n = /ip[ao]d|iphone/i.test(s);
			t.Global.FACEBOOK && n && (a = Phaser.CANVAS), e.call(this, {
				width: t.Global.GAME_WIDTH,
				height: t.Global.GAME_HEIGHT,
				renderer: a,
				parent: "content",
				transparent: !1,
				antialias: !0,
				physicsConfig: null,
				preserveDrawingBuffer: !0
			}), i.game = this, Utils.PhaserUtils.ChangeAnimationPhaserJSONData(this.additionalFrameProperties), Utils.PhaserUtils.AdjustTweenFunctions(), Utils.PhaserUtils.AddBitmapFontAddMethod(), this.state.add("Boot", t.Boot), this.state.add("Preloader", t.Preloader), this.state.add("Menu", t.Menu), this.state.add("Play", t.Play), this.state.add("Test", t.Play), this.state.start("Boot")
		}
		return __extends(i, e), i.prototype.onMute = function() {
			Utils.AudioUtils.stopMusic(), t.Global.soundOn = !1, t.Global.musicOn = !1
		}, i.prototype.onUnmute = function() {
			t.Global.soundOn = !0, t.Global.musicOn = !0, Utils.AudioUtils.playMusic("Music")
		}, i.prototype.additionalFrameProperties = function(t, e) {
			e.anchor && (t.anchorX = e.anchor.w, t.anchorY = e.anchor.h), e.nextitem && (t.nextItemX = e.nextitem.w, t.nextItemY = e.nextitem.h)
		}, i.version = "v10", i
	}(Phaser.Game);
	t.Game = e
}(FootballStar || (FootballStar = {}));
var Helper;
! function(t) {
	var e = function() {
		function t() {}
		return t.randomizeArray = function(t, e, i, a) {
			void 0 === i && (i = !1), void 0 === a && (a = !1);
			var s = i ? e.slice() : e;
			return Phaser.ArrayUtils.shuffle(s), a ? s.slice(0, t) : s
		}, t.sort = function(e, i, a, s) {
			if (void 0 === a && (a = 0), void 0 === s && (s = e.length), s > a) {
				for (var n, o = a, r = a + 1; s >= r; r++) i(e[a], e[r]) > 0 && (n = e[++o], e[o] = e[r], e[r] = n);
				n = e[a], e[a] = e[o], e[o] = n, t.sort(e, i, a, o - 1), t.sort(e, i, o + 1, s)
			}
		}, t
	}();
	t.ArrayUtils = e
}(Helper || (Helper = {}));
var Helper;
! function(t) {
	var e;
	! function(t) {
		function e(t, e, i) {
			var a = t * Math.PI * 2 * e,
				s = t * (2 * Math.PI * i + Math.PI / 2);
			return Math.sin(a) * Math.cos(s)
		}

		function i(t, e, i) {
			var a = t * Math.PI * 2 * e,
				s = -t * i;
			return Math.sin(a) * Math.exp(s)
		}

		function a(t) {
			return t = t / 2 + .5, -2 * t * t + 3 * t
		}

		function s(t) {
			return -(a(1 - t) - 1)
		}

		function n(t) {
			return Math.sin(2 * t * Math.PI)
		}

		function o(t) {
			return Math.sin(t * (Math.PI - Math.PI / 3) + Math.PI / 3)
		}

		function r(t, e) {
			return Math.sin(2 * t * Math.PI * e)
		}
		t.wiggle = e, t.sinWithExpDecay = i, t.pop5 = a, t.pop5rev = s, t.sin = n, t.halfSin = o, t.sinWithPeriod = r
	}(e = t.Easing || (t.Easing = {}))
}(Helper || (Helper = {}));
var Helper;
! function(t) {
	var e = function() {
		function t() {}
		return t.create = function(e, i, a, s, n, o, r, l, h, c) {
			return void 0 === o && (o = 0), void 0 === r && (r = 0), void 0 === l && (l = 0), void 0 === h && (h = 0), void 0 === c && (c = !1), t._image = new Phaser.Image(e, 0, 0, s), "string" == typeof n ? t._frame = e.cache.getFrameByName(s, n) : t._frame = e.cache.getFrameByIndex(s, n), t.calculateNineImage(i, a, o, r, l, h, c), t._nineImage = new Phaser.BitmapData(e, "NineImage" + t._textureKey++, t._width, t._height), t.renderNineImage(), t._nineImage
		}, t.calculateNineImage = function(e, i, a, s, n, o, r) {
			var l = t._frame;
			if (t._centralWidth = l.width - s - o, t._centralHeight = l.height - a - n, r) t._horizontalRepeats = e, t._verticalRepeats = i, t._width = s + o + t._centralWidth * e, t._height = a + n + t._centralHeight * i, t._lastWidth = 0, t._lastHeight = 0;
			else {
				var h = e - s - o;
				t._horizontalRepeats = Math.floor(h / t._centralWidth), t._lastWidth = h % t._centralWidth;
				var c = i - a - n;
				t._verticalRepeats = Math.floor(c / t._centralHeight), t._lastHeight = c % t._centralHeight, t._width = e, t._height = i
			}
			t._leftWidth = s, t._rightWidth = o, t._topHeight = a, t._bottomHeight = n
		}, t.renderNineImage = function() {
			var e = t._frame.y,
				i = 0;
			t._topHeight > 0 && (t.renderNineImageRow(t._image, e, i, t._topHeight), e += t._topHeight, i += t._topHeight);
			for (var a = 0; a < t._verticalRepeats; a++) t.renderNineImageRow(t._image, e, i, t._centralHeight), i += t._centralHeight;
			t._lastHeight > 0 && (t.renderNineImageRow(t._image, e, i, t._lastHeight), i += t._lastHeight), e += t._centralHeight, t._bottomHeight > 0 && t.renderNineImageRow(t._image, e, i, t._bottomHeight)
		}, t.renderNineImageRow = function(e, i, a, s) {
			var n = t._frame.x,
				o = 0;
			t._leftWidth > 0 && (t._nineImage.copy(e, n, i, t._leftWidth, s, o, a), o += t._leftWidth, n += t._leftWidth);
			for (var r = 0; r < t._horizontalRepeats; r++) t._nineImage.copy(e, n, i, t._centralWidth, s, o, a), o += t._centralWidth;
			t._lastWidth > 0 && (t._nineImage.copy(e, n, i, t._lastWidth, s, o, a), o += t._lastWidth), n += t._centralWidth, t._rightWidth > 0 && t._nineImage.copy(e, n, i, t._rightWidth, s, o, a)
		}, t._textureKey = 0, t
	}();
	t.NineImage = e
}(Helper || (Helper = {}));
var Helper;
! function(t) {
	var e;
	! function(t) {
		t[t.UNDEFINED = -1] = "UNDEFINED", t[t.SPACE = 1] = "SPACE", t[t.NEWLINE = 2] = "NEWLINE", t[t.CHARACTER = 3] = "CHARACTER"
	}(e || (e = {}));
	var i = function() {
		function t() {}
		return t.hasNext = function() {
			return t.textPosition < t.text.length
		}, t.getChar = function() {
			return t.text.charAt(t.textPosition++)
		}, t.peekChar = function() {
			return t.text.charAt(t.textPosition)
		}, t.getPosition = function() {
			return t.textPosition
		}, t.setPosition = function(e) {
			t.textPosition = e
		}, t.getCharAdvance = function(e, i) {
			var a = t.fontData.chars[e],
				s = a.xAdvance;
			return i > 0 && a.kerning[i] && (s += a.kerning[i]), s
		}, t.getCharType = function(t) {
			return " " === t ? e.SPACE : /(?:\r\n|\r|\n)/.test(t) ? e.NEWLINE : e.CHARACTER
		}, t.wrapText = function(i, a, s, n, o, r) {
			t.text = a, t.setPosition(0), t.fontData = i.cache.getBitmapFont(o).font, void 0 === r && (r = t.fontData.size);
			var l = r / t.fontData.size,
				h = t.fontData.lineHeight * l,
				c = s / l,
				_ = [],
				u = [],
				p = [],
				d = 0,
				m = !0,
				f = 0,
				g = 0;
			_[d] = g, p[f++] = 0;
			for (var y = n; t.hasNext();) {
				for (var S = 0, v = 0, E = -1, A = e.UNDEFINED, b = e.UNDEFINED, P = c, C = -1; t.hasNext();) {
					g = t.getPosition();
					var I = t.getChar();
					A = t.getCharType(I);
					var T = I.charCodeAt(0);
					if (A === e.SPACE) b !== e.SPACE && (v = S), ++S, P -= t.getCharAdvance(T, C);
					else if (A === e.CHARACTER) {
						if (b !== e.CHARACTER && (E = g), P -= t.getCharAdvance(T, C), 0 > P) break;
						++S
					} else if (A === e.NEWLINE) {
						var w = !1;
						if (t.hasNext() && (w = !0, v = S, E = t.getPosition(), g = E, P = -1, A = e.CHARACTER), w) break
					}
					b = A, C = T
				}
				y -= h, 0 > y && (p[f++] = d), 0 > P && A === e.CHARACTER ? (0 !== v ? u[d] = v : u[d] = S, m = !1, 0 > y && (m = !0, y = n - h), 0 !== v ? (_[++d] = E, t.setPosition(E)) : (_[++d] = g, t.setPosition(g))) : t.hasNext() || (A === e.CHARACTER ? u[d] = S : A === e.SPACE && (u[d] = v))
			}
			p[f] = d + 1;
			for (var M = [], L = 1; f >= L; L++) {
				for (var G = p[L - 1], x = p[L], F = [], O = G; x > O; O++) F.push(t.text.substr(_[O], u[O]));
				M.push(F.join("\n"))
			}
			return M
		}, t
	}();
	t.TextWrapper = i
}(Helper || (Helper = {}));
var Log;
! function(t) {
	var e = function() {
		function t() {}
		return t.msg = function(e) {
			if (t._messages.length < t.MAX_LENGTH) t._messages.push(e);
			else {
				for (var i = 1; i < t.MAX_LENGTH; i++) t._messages[i - 1] = t._messages[i];
				t._messages[t.MAX_LENGTH - 1] = e
			}
		}, t.print = function(e) {
			for (var i = 0; i < t._messages.length; i++) e.text(t._messages[i], 50, 70 + 16 * i, "RGB(255, 0, 0)")
		}, t.MAX_LENGTH = 30, t._messages = [], t
	}();
	t.Log = e
}(Log || (Log = {}));
var Gamee;
! function(t) {
	var e = function() {
		function t(e, i, a) {
			void 0 === a && (a = !1), this._game = null, this._gameeController = null, this._indices = {
				right: 1,
				up: 2,
				left: 4,
				down: 8,
				A: 16,
				B: 32,
				button: 64
			}, this._pressesCache = 0, this._isDown = 0, this._justDown = 0, this._justUp = 0, this._gameRunning = !1, this._score = 1000, this._enabled = e, e && (void 0 !== window.gamee && ("Touch" !== i ? (this._gameeController = window.gamee.controller.requestController(i, {
				enableKeyboard: a
			}), this.keyHandlers()) : (this._gameeController = window.gamee.controller.requestController("Touch"), this.touchHandlers())), this.eventHandlers()), t._instance = this
		}
		return Object.defineProperty(t, "instance", {
			get: function() {
				return null === t._instance, t._instance
			},
			enumerable: !0,
			configurable: !0
		}), t.prototype.setGame = function(t) {
			this._game = t
		}, Object.defineProperty(t.prototype, "gameRunning", {
			get: function() {
				return this._gameRunning
			},
			enumerable: !0,
			configurable: !0
		}), t.prototype.keyHandlers = function() {
			var t = this;
			this._gameeController.on("keydown", function(e) {
				t._pressesCache |= t._indices[e.button];
				var i = t._game.state.getCurrentState();
				"undefined" != typeof i && "function" == typeof i.onGameeButtonDown && i.onGameeButtonDown(e.button)
			}), this._gameeController.on("keyup", function(e) {
				t._pressesCache &= ~t._indices[e.button];
				var i = t._game.state.getCurrentState();
				"undefined" != typeof i && "function" == typeof i.onGameeButtonUp && i.onGameeButtonUp(e.button)
			})
		}, t.prototype.processKeys = function() {
			var t = this._isDown;
			this._isDown = this._pressesCache;
			var e = t ^ this._isDown;
			this._justDown = e & this._isDown, this._justUp = e & ~this._isDown
		}, t.prototype.clearKeys = function() {
			this._pressesCache = 0, this._isDown = 0, this._justDown = 0, this._justUp = 0
		}, t.prototype.isDown = function(t) {
			return (this._isDown & this._indices[t]) > 0
		}, t.prototype.justDown = function(t) {
			return (this._justDown & this._indices[t]) > 0
		}, Object.defineProperty(t.prototype, "anyIsDown", {
			get: function() {
				return this._isDown > 0
			},
			enumerable: !0,
			configurable: !0
		}), Object.defineProperty(t.prototype, "anyJustDown", {
			get: function() {
				return this._justDown > 0
			},
			enumerable: !0,
			configurable: !0
		}), t.prototype.isUp = function(t) {
			return !this.isDown(t)
		}, t.prototype.justUp = function(t) {
			return (this._justUp & this._indices[t]) > 0
		}, t.prototype.touchHandlers = function() {
			var t = this;
			this._gameeController.on("touchstart", function(e) {
				var i = t._game.state.getCurrentState();
				"undefined" != typeof i && "function" == typeof i.onGameeTouchStart && i.onGameeTouchStart(e)
			}), this._gameeController.on("touchend", function(e) {
				var i = t._game.state.getCurrentState();
				"undefined" != typeof i && "function" == typeof i.onGameeTouchEnd && i.onGameeTouchEnd(e)
			}), this._gameeController.on("touchmove", function(e) {
				var i = t._game.state.getCurrentState();
				"undefined" != typeof i && "function" == typeof i.onGameeTouchMove && i.onGameeTouchMove(e)
			}), this._gameeController.on("touchleave", function(e) {
				var i = t._game.state.getCurrentState();
				"undefined" != typeof i && "function" == typeof i.onGameeTouchLeave && i.onGameeTouchLeave(e)
			}), this._gameeController.on("touchcancel", function(e) {
				var i = t._game.state.getCurrentState();
				"undefined" != typeof i && "function" == typeof i.onGameeTouchCancel && i.onGameeTouchCancel(e)
			})
		}, t.prototype.eventHandlers = function() {
			var t = this;
			window.gamee.onPause = function() {
				t._enabled && t.onPause()
			}, window.gamee.onUnpause = function() {
				t._enabled && t.onUnpause()
			}, window.gamee.onRestart = function() {
				t._enabled && t.onRestart()
			}, window.gamee.onMute = function() {
				t._enabled && t._game.onMute()
			}, window.gamee.onUnmute = function() {
				t._enabled && t._game.onUnmute()
			}
		}, t.prototype.onPause = function() {
			var t = this._game.state.getCurrentState();
			"undefined" != typeof t && "function" == typeof t.onGameePause && t.onGameePause()
		}, t.prototype.onUnpause = function() {
			var t = this._game.state.getCurrentState();
			"undefined" != typeof t && "function" == typeof t.onGameeUnpause && t.onGameeUnpause()
		}, t.prototype.onRestart = function() {
			var t = this._game.state.getCurrentState();
			"undefined" != typeof t && "function" == typeof t.onGameeRestart && t.onGameeRestart()
		}, Object.defineProperty(t.prototype, "score", {
			get: function() {
				return this._score
			},
			set: function(t) {
				this._score = t, this._enabled && (window.gamee.score = t)
			},
			enumerable: !0,
			configurable: !0
		}), t.prototype.addScore = function(t) {
			this.score += t
		}, t.prototype.gameStart = function() {
			this._gameRunning || (this._enabled && window.gamee.gameStart(), this._gameRunning = !0)
		}, t.prototype.gameOver = function() {
			this._gameRunning && (this._enabled && window.gamee.gameOver(), this._gameRunning = !1)
		}, t._instance = null, t
	}();
	t.Gamee = e
}(Gamee || (Gamee = {}));
var FootballStar;
! function(t) {
	var e = function() {
		function t() {}
		return t.PARALAX_SPEED = 160, t.FAIL_TIME = 1800, t.GRAVITY = 1e3, t.NEXT_BALL_TIME_MIN = .3, t.NEXT_BALL_TIME_MAX = 1, t.THREE_BALLS_SCORE = 30, t.TWO_BALLS_SCORE = 10, t.BALL_RESTITUTION = .78, t.BALL_ELASTICITY = .6, t.BALL_Y_LIMIT = 500, t.BALL_X_VEL = 480, t.BALL_RADIUS = 22, t.MAX_REACHABLE_HEIGHT = 275, t.KICK_SPOT_CENTER_X = 185, t.KICK_SPOT_CENTER_Y = 60, t.FROM_SPOT_TO_OFFSCREEN = 640 - t.KICK_SPOT_CENTER_X + 32, t.KICK_SPOT_LIMIT_X_FAIL = 50, t.KICK_SPOT_LIMIT_PERFECT_PERCENT = .4, t.FLOOR_LEVEL = 535, t.MIN_KICK_SPEED_START = .85, t.MAX_KICK_SPEED_START = 1.5, t.MIN_KICK_SPEED_END = 1.2, t.MAX_KICK_SPEED_END = 2.5, t.MIN_KICK_SPEED_STEPS = 10, t.MAX_KICK_SPEED_STEPS = 10, t
	}();
	t.Gameplay = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function() {
		function t(t, e, i) {
			void 0 === i && (i = null), this.name = "<no name>", this.debug = 0, this._newFunction = null, this._count = 0, this._pool = [], this._canGrow = !0, this._poolSize = 0, this._classType = t, this._newFunction = i;
			for (var a = 0; e > a; a++) {
				var s = this.newItem();
				this._pool[this._count++] = s
			}
			this._poolSize = e
		}
		return t.prototype.createItem = function() {
			return 0 === this._count ? ((this.debug & t.DEBUG_ALLOCATION) > 0, this._canGrow ? this.newItem() : null) : ((this.debug & t.DEBUG_CREATE) > 0, this._pool[--this._count])
		}, t.prototype.destroyItem = function(e) {
			(this.debug & t.DEBUG_DESTROY) > 0, this._pool[this._count++] = e
		}, Object.defineProperty(t.prototype, "newFunction", {
			set: function(t) {
				this._newFunction = t
			},
			enumerable: !0,
			configurable: !0
		}), t.prototype.newItem = function() {
			return null !== this._newFunction ? this._newFunction() : new this._classType
		}, Object.defineProperty(t.prototype, "canGrow", {
			set: function(t) {
				this._canGrow = t
			},
			enumerable: !0,
			configurable: !0
		}), t.DEBUG_ALLOCATION = 1, t.DEBUG_CREATE = 2, t.DEBUG_DESTROY = 4, t.DEBUG_ALL = 7, t
	}();
	t.Pool = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function() {
		function e(t, i) {
			this.maxVelocity = e.MAX_VELOCITY, this._velocity = new Phaser.Point(0, 0), this._angularVelocity = 0, this._friction = 0, this._angularDrag = 0, this._gravity = 0, this._alpha = 1, this._scaleChange = 0, this._alphaChange = 0, this._game = t
		}
		return Object.defineProperty(e.prototype, "visual", {
			get: function() {
				return this._visual
			},
			enumerable: !0,
			configurable: !0
		}), Object.defineProperty(e.prototype, "on", {
			set: function(t) {
				this._on = t, this._visual.exists = t, this._visual.visible = t
			},
			enumerable: !0,
			configurable: !0
		}), e.prototype.remove = function() {
			var t = this._visual.parent;
			null !== t && (t instanceof Phaser.Group ? t.remove(this._visual) : t.removeChild(this._visual), t = null)
		}, e.prototype.bringToTop = function() {
			var t = this._visual.parent;
			t instanceof Phaser.Group && t.bringToTop(this._visual)
		}, e.prototype.sendToBack = function() {
			var t = this._visual.parent;
			t instanceof Phaser.Group && t.sendToBack(this._visual)
		}, Object.defineProperty(e.prototype, "textureKey", {
			set: function(t) {
				this._textureKey = t
			},
			enumerable: !0,
			configurable: !0
		}), e.prototype.setScaleChange = function(t, e) {
			void 0 === e && (e = 0), this._scaleChangeType = t, this._scaleChange = e
		}, Object.defineProperty(e.prototype, "alpha", {
			set: function(t) {
				this._alpha = t, this._visual.alpha = Phaser.Math.clamp(t, 0, 1)
			},
			enumerable: !0,
			configurable: !0
		}), e.prototype.setAlphaChange = function(t, e) {
			void 0 === e && (e = 0), this._alphaChangeType = t, this._alphaChange = e
		}, e.prototype.setPhysics = function(t, e, i, a, s, n) {
			void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === a && (a = 0), void 0 === s && (s = 0), void 0 === n && (n = 0), this._velocity.setTo(t, e), this._angularVelocity = i, this._friction = a, this._angularDrag = s, this._gravity = n, this._simplePhysics = 0 === n && 0 === a && 0 === s
		}, e.prototype.setFrame = function(t) {}, e.prototype.onEmit = function(t) {
			t.add(this._visual)
		}, e.prototype.onKill = function(t) {}, e.prototype.update = function(e) {
			void 0 === e && (e = !0);
			var i = this._game.time.physicsElapsed;
			if (this.lifetime > 0 && (this.lifetime -= i) <= 0) return !1;
			if ((0 !== this._velocity.x || 0 !== this._velocity.y) && (this._visual.x += this._velocity.x * i, this._visual.y += this._velocity.y * i), 0 !== this._angularVelocity && (this._visual.angle += this._angularVelocity * i), this._simplePhysics || (this._velocity.x += -this._friction * this._velocity.x * i, this._velocity.y += (this._gravity - this._friction * this._velocity.y) * i, this._angularVelocity += -this._angularDrag * this._angularVelocity * i), !e) return !0;
			if (this._scaleChangeType != t.eParameterChangeType.NO_CHANGE) switch (this._scaleChangeType) {
				case t.eParameterChangeType.IN_TIME:
					(this._visual.scale.x += this._scaleChange * i) < 0 && (this._visual.scale.x = 0, this._scaleChange < 0 && (this._scaleChangeType = t.eParameterChangeType.NO_CHANGE)), (this._visual.scale.y += this._scaleChange * i) < 0 && (this._visual.scale.y = 0, this._scaleChange < 0 && (this._scaleChangeType = t.eParameterChangeType.NO_CHANGE))
			}
			if (this._alphaChangeType != t.eParameterChangeType.NO_CHANGE) switch (this._alphaChangeType) {
				case t.eParameterChangeType.IN_TIME:
					this._alpha += this._alphaChange * i, this._alpha < 0 ? (this._visual.alpha = 0, this._alphaChange < 0 && (this._alphaChangeType = t.eParameterChangeType.NO_CHANGE)) : this._alpha > 1 ? (this._visual.alpha = 1, this._alphaChange > 0 && (this._alphaChangeType = t.eParameterChangeType.NO_CHANGE)) : this._visual.alpha = this._alpha
			}
			return !0
		}, e.MAX_VELOCITY = 1e3, e
	}();
	t.Particle = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e;
	! function(t) {
		t[t.NONE = 0] = "NONE", t[t.FLOW = 1] = "FLOW", t[t.EXPLODE = 2] = "EXPLODE"
	}(e || (e = {})),
	function(t) {
		t[t.NO_CHANGE = 0] = "NO_CHANGE", t[t.IN_TIME = 1] = "IN_TIME"
	}(t.eParameterChangeType || (t.eParameterChangeType = {}));
	var i = t.eParameterChangeType,
		a = function(a) {
			function s(n, o, r, l) {
				a.call(this, n, null), this._maxParticles = s.MAX_PARTICELES, this.emitPoint = new Phaser.Point(0, 0), this.area = new Phaser.Point(0, 0), this.emitObject = null, this.gravity = 100, this.particleClass = t.SpriteParticle, this.particleBringToTop = !1, this.particleSendToBack = !1, this.frequency = 100, this.minLifetime = 1, this.maxLifetime = 2, this.minParticleScale = 1, this.maxParticleScale = 1, this.scaleChange = 0, this.scaleChangeType = i.NO_CHANGE, this.minParticleSpeed = new Phaser.Point(-100, -100), this.maxParticleSpeed = new Phaser.Point(100, 100), this.particleFriction = 0, this.minAngularSpeed = -360, this.maxAngularSpeed = 360, this.angularDrag = 0, this.minParticleAlpha = 1, this.maxParticleAlpha = 1, this.alphaChange = 0, this.alphaChangeType = i.NO_CHANGE, this.forceEmit = !1, this._on = !1, this._mode = e.NONE, this._flowQuantity = 0, this._flowTotal = 0, this._flowCounter = 0, this._particlesPool = [], this._counterPool = 0, this._particlesUsed = [], this._counterUsed = 0, this._timer = 0, this._frames = null, this._emitPoint = new Phaser.Point(0, 0), this._minParticleScale = new Phaser.Point(1, 1), this._maxParticleScale = new Phaser.Point(1, 1), this.position.setTo(o, r), this._maxParticles = l
			}
			return __extends(s, a), s.prototype.update = function() {
				if (this._on && this.game.time.time >= this._timer && (this._timer = this.game.time.time + this.frequency * this.game.time.slowMotion, this._mode === e.FLOW))
					if (-1 !== this._flowTotal && this._flowCounter >= this._flowTotal) this._mode = e.NONE;
					else
						for (var t = Math.max(1, this._flowQuantity), i = 0; t > i && !(this.emitParticle(this.forceEmit) && (this._flowCounter++, -1 !== this._flowTotal && this._flowCounter >= this._flowTotal)); i++);
				for (var i = this._counterUsed - 1; i >= 0; i--) {
					var a = this._particlesUsed[i];
					a.update() || (a.on = !1, a.remove(), a.onKill(this), this._particlesUsed[i] = this._particlesUsed[--this._counterUsed], this._particlesPool[this._counterPool++] = a)
				}
			}, s.prototype.makeParticles = function(t, e, i, a) {
				(void 0 === i || i > this._maxParticles) && (i = this._maxParticles), void 0 !== e && (this._frames = e);
				for (var s = 0; i > s; s++) {
					var n = new this.particleClass(this.game, a);
					n.textureKey = t, n.onCreate(this), n.on = !1, this._particlesPool[this._counterPool++] = n
				}
			}, Object.defineProperty(s.prototype, "on", {
				set: function(t) {
					this._on = t, this.exists = t, this.visible = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(s.prototype, "lifetime", {
				set: function(t) {
					this.minLifetime = this.maxLifetime = t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(s.prototype, "count", {
				get: function() {
					return this._counterUsed
				},
				enumerable: !0,
				configurable: !0
			}), s.prototype.explode = function(t, i, a) {
				this._mode = e.EXPLODE, this.on = !0, this.emitParticles(t, i, a)
			}, s.prototype.flow = function(t, i, a, s, n, o) {
				this._mode = e.FLOW, this.on = !0, (void 0 === i || 0 === i) && (i = 1), void 0 === a && (a = -1), void 0 === s && (s = !0), i > this._maxParticles && (i = this._maxParticles), this.frequency = t, this._flowCounter = 0, this._flowQuantity = i, this._flowTotal = a, s && (this.emitParticles(i, n, o), this._flowCounter += i, this._timer = this.game.time.time + t * this.game.time.slowMotion)
			}, s.prototype.stop = function() {
				this._mode = e.NONE
			}, s.prototype.killAllParticles = function(t) {
				for (void 0 === t && (t = !0), this._mode = e.NONE; this._counterUsed > 0;) {
					var i = this._particlesUsed[--this._counterUsed];
					i.remove(), t || i.onKill(this), this._particlesPool[this._counterPool++] = i
				}
			}, s.prototype.emitParticles = function(t, e, i) {
				for (var a = 0; t > a; a++) {
					var s = this.emitParticle(this.forceEmit);
					if (null === s) break;
					void 0 !== e && null !== e && e.call(i, s)
				}
			}, s.prototype.emitParticle = function(t, e) {
				if (void 0 === t && (t = !1), void 0 === e && (e = !1), 0 === this._counterPool) {
					if (!t) return null;
					var a = this._particlesUsed[0];
					this._particlesUsed[0] = this._particlesUsed[--this._counterUsed], a.remove(), a.onKill(this), this._particlesPool[this._counterPool++] = a
				}
				var s = this._particlesPool[--this._counterPool];
				if (this._particlesUsed[this._counterUsed++] = s, s.on = !0, this.randomEmitPoint(this._emitPoint), s.visual.position.set(this._emitPoint.x, this._emitPoint.y), s.visual.angle = 0, e) s.lifetime = -1, s.visual.scale.set(1, 1), s.setScaleChange(i.NO_CHANGE), s.alpha = 1, s.setAlphaChange(i.NO_CHANGE), s.setPhysics();
				else {
					if (s.lifetime = this.game.rnd.realInRange(this.minLifetime, this.maxLifetime), 1 !== this.minParticleScale || 1 !== this.maxParticleScale) {
						var n = this.game.rnd.realInRange(this.minParticleScale, this.maxParticleScale);
						s.visual.scale.set(n, n)
					} else this._minParticleScale.x !== this._maxParticleScale.x || this._minParticleScale.y !== this._maxParticleScale.y ? s.visual.scale.set(this.game.rnd.realInRange(this._minParticleScale.x, this._maxParticleScale.x), this.game.rnd.realInRange(this._minParticleScale.y, this._maxParticleScale.y)) : s.visual.scale.set(1, 1);
					s.setScaleChange(this.scaleChangeType, this.scaleChange), s.alpha = this.game.rnd.realInRange(this.minParticleAlpha, this.maxParticleAlpha), s.setAlphaChange(this.alphaChangeType, this.alphaChange), s.setPhysics(this.game.rnd.realInRange(this.minParticleSpeed.x, this.maxParticleSpeed.x), this.game.rnd.realInRange(this.minParticleSpeed.y, this.maxParticleSpeed.y), this.game.rnd.realInRange(this.minAngularSpeed, this.maxAngularSpeed), this.particleFriction, this.angularDrag, this.gravity), null !== this._frames && s.setFrame(this.randomFrame())
				}
				return s.onEmit(this), this.particleBringToTop ? s.bringToTop() : this.particleSendToBack && s.sendToBack(), s
			}, s.prototype.destroy = function() {
				t.ParticlesManager.instance.remove(this), a.prototype.destroy.call(this, !0, !1)
			}, s.prototype.randomFrame = function() {
				var t = null;
				return null !== this._frames && (t = Array.isArray(this._frames) ? "string" == typeof this._frames[0] ? this.game.rnd.pick(this._frames) : this.game.rnd.pick(this._frames) : this._frames), t
			}, s.prototype.randomEmitPoint = function(t) {
				return this.area instanceof Phaser.Point ? t.setTo(0, 0) : this.area.random(t), t.x += this.emitPoint.x, t.y += this.emitPoint.y, null !== this.emitObject && (t.x += this.emitObject.x, t.y += this.emitObject.y), t
			}, s.prototype.setXSpeed = function(t, e) {
				t = t || 0, e = e || 0, this.minParticleSpeed.x = t, this.maxParticleSpeed.x = e
			}, s.prototype.setYSpeed = function(t, e) {
				t = t || 0, e = e || 0, this.minParticleSpeed.y = t, this.maxParticleSpeed.y = e
			}, s.prototype.setAngularSpeed = function(t, e) {
				t = t || 0, e = e || 0, this.minAngularSpeed = t, this.maxAngularSpeed = e
			}, s.prototype.setAlpha = function(t, e) {
				void 0 === t && (t = 1), void 0 === e && (e = 1), this.minParticleAlpha = t, this.maxParticleAlpha = e
			}, s.prototype.setAlphaChange = function(t, e, a) {
				switch (void 0 === e && (e = 0), void 0 === a && (a = 0), this.alphaChangeType = t, t) {
					case i.NO_CHANGE:
						this.alphaChange = 0;
						break;
					case i.IN_TIME:
						0 === a && (a = 1), this.alphaChange = e / a
				}
			}, s.prototype.setScale = function(t, e, i, a) {
				void 0 === t && (t = 1), void 0 === e && (e = 1), void 0 === i && (i = 1), void 0 === a && (a = 1), this._minParticleScale.setTo(t, i), this._maxParticleScale.setTo(e, a)
			}, s.prototype.setScaleChange = function(t, e, a) {
				switch (void 0 === e && (e = 0), void 0 === a && (a = 0), this.scaleChangeType = t, t) {
					case i.NO_CHANGE:
						this.scaleChange = 0;
						break;
					case i.IN_TIME:
						0 === a && (a = 1), this.scaleChange = e / a
				}
			}, s.prototype.emitAt = function(t, e) {
				this.emitPoint.setTo(t, e)
			}, s.prototype.emitAtObject = function(t) {
				t.center ? this.emitPoint.setTo(t.center.x, t.center.y) : this.emitPoint.setTo(t.x, t.y)
			}, s.MAX_PARTICELES = 16, s
		}(Phaser.Group);
	t.ParticlesEmitter = a
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function() {
		function t() {
			this._emitters = [], this._emittersCount = 0
		}
		return Object.defineProperty(t, "instance", {
			get: function() {
				return null === t._instance && (t._instance = new t), t._instance
			},
			enumerable: !0,
			configurable: !0
		}), t.prototype.add = function(t) {
			this._emitters[this._emittersCount++] = t
		}, t.prototype.remove = function(t) {
			for (var e = this._emittersCount - 1; e >= 0 && this._emitters[e] !== t; e--); - 1 !== e && (this._emitters[e] = this._emitters[--this._emittersCount])
		}, t.prototype.update = function() {
			for (var t = 0; t < this._emittersCount; t++) {
				var e = this._emitters[t];
				e.exists && e.update()
			}
		}, t._instance = null, t
	}();
	t.ParticlesManager = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(t) {
		function e() {
			t.apply(this, arguments)
		}
		return __extends(e, t), e.prototype.setFrame = function(t) {
			var e = this._visual;
			"string" == typeof t ? e.frameName = t : e.frame = t
		}, e.prototype.onCreate = function(t) {
			var e = new Phaser.Sprite(this._game, 0, 0, this._textureKey);
			e.anchor.setTo(.5, .5), this._visual = e
		}, e
	}(t.Particle);
	t.SpriteParticle = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(t) {
		function e(e, i, a, s, n) {
			t.call(this, e, i, a, s), void 0 !== n && this.setAnchoredFrame(n)
		}
		return __extends(e, t), e.prototype.setAnchoredFrame = function(t) {
			if ("string" == typeof this.key) {
				var e = null;
				"string" == typeof t ? (this.frameName = t, e = this.game.cache.getFrameByName(this.key, t)) : (this.frame = t, e = this.game.cache.getFrameByIndex(this.key, t)), void 0 !== e.anchorX && void 0 !== e.anchorY && this.anchor.setTo(e.anchorX, e.anchorY)
			}
		}, e
	}(Phaser.Sprite);
	t.AnchoredSprite = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(e) {
		function i(i, a) {
			e.call(this, i, a), this._grass = [], this._rail = null, this._tribuneStep = 0, this._grassStep = 0, this._railStep = 0, this._bg = i.add.sprite(0, 0, "Sprites", "bg", this), this._bg.width = 640, this._tribune = new t.ParalaxLayer(i, this, "tribuna", 1), this._tribune.y = 522, this.createGrass(), i.height <= 640 && this.createRail()
		}
		return __extends(i, e), i.prototype.createGrass = function() {
			for (var e = 0; e < this._grass.length; e++) {
				var i = this._grass[e];
				this.remove(i), i.destroy()
			}
			var a = 514;
			if (this._grass = [], this._grass[0] = new t.ParalaxLayer(this.game, this, "travicka", 0), this._grass[0].y = a, t.Global.REBRAND) {
				a += this._grass[0].height - 70;
				for (var s = this.game.height - 640, n = (Math.floor(s * (1 - .197)) + 70, this.game.cache.getFrameByName("Sprites", "GrassBottom").height), o = Math.ceil(s / n), e = 0; o > e; e++) this._grass[e + 1] = new t.ParalaxLayer(this.game, this, "GrassBottom", 0), this._grass[e + 1].y = a, a += n
			}
		}, i.prototype.createRail = function() {
			this._rail = new t.ParalaxLayer(this.game, this, "zabradli", 1), this._rail.y = 640
		}, i.prototype.onResize = function(t) {
			this._bg.y = -(t - 640), this._bg.height = t, this.createGrass(), this.move()
		}, i.prototype.move = function() {
			var e = t.Gameplay.PARALAX_SPEED * this.game.time.physicsElapsed;
			this._tribuneStep = (this._tribuneStep + .3 * e) % 640, this._tribune.move(this._tribuneStep), this._grassStep = (this._grassStep + e) % 640;
			for (var i = 0; i < this._grass.length; i++) this._grass[i].move(this._grassStep);
			null !== this._rail ? this.game.height <= 640 ? (this._rail.visible = !0, this._railStep = (this._railStep + 1.25 * e) % 640, this._rail.move(this._railStep)) : this._rail.visible = !1 : this.game.height <= 640 && this.createRail()
		}, i
	}(Phaser.Group);
	t.Background = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(e) {
		function i(a, s, n) {
			e.call(this, a, s), this._shadow = n, this._ball = a.add.sprite(0, 0, "Sprites", "balon", this), this._ball.anchor.set(.5, .5), this._swoosh = new t.AnchoredSprite(a, 0, 0, "Sprites", "rychlost1"), this._swoosh.animations.add("swoosh", i.ANIM_SWOOSH, 12, !0), this.add(this._swoosh), this._swoosh.visible = !1, this.position.set(800, -100)
		}
		return __extends(i, e), i.prototype.getAngle = function() {
			return this._ball.angle
		}, i.prototype.setAngle = function(t) {
			this._ball.angle = t
		}, Object.defineProperty(i.prototype, "speed", {
			get: function() {
				return this._speed
			},
			set: function(t) {
				this._speed = t
			},
			enumerable: !0,
			configurable: !0
		}), Object.defineProperty(i.prototype, "angularSpeed", {
			get: function() {
				return this._angularSpeed
			},
			set: function(t) {
				this._angularSpeed = t
			},
			enumerable: !0,
			configurable: !0
		}), Object.defineProperty(i.prototype, "yVelocity", {
			get: function() {
				return this._yVelocity
			},
			set: function(t) {
				this._yVelocity = t
			},
			enumerable: !0,
			configurable: !0
		}), Object.defineProperty(i.prototype, "state", {
			get: function() {
				return this._ballState
			},
			set: function(t) {
				this._ballState = t
			},
			enumerable: !0,
			configurable: !0
		}), i.prototype.setSwoosh = function(t) {
			this._swoosh.visible = t, this._swoosh.exists = t, t ? this._swoosh.animations.play("swoosh") : this._swoosh.animations.currentAnim.stop()
		}, i.prototype.setSwooshAngle = function(e, i) {
			this._swoosh.angle = Phaser.Math.radToDeg(Math.atan2(i, e)), this._swoosh.scale.x = e / t.Gameplay.BALL_X_VEL / 3
		}, i.prototype.updateShadowPos = function() {
			this._shadow.x = this.x, this._shadow.scale.x = .5 * this.y / t.Gameplay.FLOOR_LEVEL
		}, Object.defineProperty(i.prototype, "bonus", {
			set: function(t) {},
			enumerable: !0,
			configurable: !0
		}), i.prototype.move = function(e) {
			if (3 !== this._ballState && 4 !== this._ballState) {
				var i = this.game.time.physicsElapsed,
					a = 0 === this._ballState || 2 === this._ballState ? -1 : 1,
					s = this._speed * i;
				if (this.x += s * a, 0 === this._ballState || 2 === this._ballState) {
					var n = e.getHeight(this.id, s);
					this.y = t.Gameplay.FLOOR_LEVEL + (n - t.Gameplay.BALL_Y_LIMIT) - t.Gameplay.BALL_RADIUS
				} else 1 === this._ballState && (this._yVelocity += t.Gameplay.GRAVITY * i, this.y += this._yVelocity * i, this.y > t.Gameplay.FLOOR_LEVEL - t.Gameplay.BALL_RADIUS && (this.y = t.Gameplay.FLOOR_LEVEL - t.Gameplay.BALL_RADIUS, this._yVelocity *= -t.Gameplay.BALL_ELASTICITY), this.setSwooshAngle(this._speed, this._yVelocity));
				var o = this.getAngle();
				this.y >= 496 && (this._angularSpeed = Phaser.Math.radToDeg(this._speed / 64)), this.setAngle((o + this._angularSpeed * a * this.game.time.physicsElapsed) % 360), this.updateShadowPos()
			}
		}, i.ANIM_SWOOSH = ["rychlost1", "rychlost2"], i
	}(Phaser.Group);
	t.Ball = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function() {
		function e(t) {
			this._samples = [], this._sections = [], this._sampleIdx = [], this._speedStep = [], this._rnd = t, this.calc(), this.analyze()
		}
		return e.prototype.calc = function() {
			for (var i = 1 / 60 / e.SUBSAMPLES, a = t.Gameplay.BALL_Y_LIMIT, s = -Math.sqrt(2 * t.Gameplay.BALL_Y_LIMIT * t.Gameplay.GRAVITY), n = !0, o = 0, r = 0; n; r++) this._samples[o++] = a, s += t.Gameplay.GRAVITY * i, a += s * i, a > t.Gameplay.BALL_Y_LIMIT && (a = t.Gameplay.BALL_Y_LIMIT, s *= -t.Gameplay.BALL_ELASTICITY, Math.abs(s) < e.VEL_EPSILON && (n = !1))
		}, e.prototype.analyze = function() {
			for (var e = !0, i = null, a = 0; a < this._samples.length; a++) {
				var s = t.Gameplay.BALL_Y_LIMIT - this._samples[a],
					n = a === this._samples.length - 1;
				e && !n ? s <= t.Gameplay.MAX_REACHABLE_HEIGHT && (i = new t.HeightSection, i.startIndex = a, e = !1) : (s > t.Gameplay.MAX_REACHABLE_HEIGHT || n) && null !== i && (i.endIndex = a, this._sections.push(i), e = !0, i = null)
			}
		}, e.prototype.reset = function(i, a) {
			this._speedStep[i] = 60 * e.SUBSAMPLES / a;
			for (var s = Math.ceil(t.Gameplay.FROM_SPOT_TO_OFFSCREEN * this._speedStep[i]), n = 0, o = 0; o < this._sections.length; o++) {
				var r = this._sections[o];
				r.newStart = Math.min(Math.max(r.startIndex, s), r.endIndex), n += r.endIndex - r.newStart
			}
			for (var l = this._rnd.integerInRange(0, n - 1), h = l, o = 0; o < this._sections.length; o++) {
				var r = this._sections[o],
					c = r.endIndex - r.newStart;
				if (!(h >= c)) {
					this._sampleIdx[i] = r.newStart + h - s;
					break
				}
				h -= c
			}
		}, e.prototype.getHeight = function(t, e) {
			var i = this._samples[Math.floor(this._sampleIdx[t])];
			return this._sampleIdx[t] += e * this._speedStep[t], this._sampleIdx[t] = Math.min(this._sampleIdx[t], this._samples.length - 1), i
		}, e.SUBSAMPLES = 20, e.VEL_EPSILON = 30, e
	}();
	t.BallPath = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function() {
		function t() {}
		return t
	}();
	t.HeightSection = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(e) {
		function i(i, a) {
			e.call(this, i, a), this._spot = new t.AnchoredSprite(i, 0, 0, "Sprites", "ballpoint"), this._circle = new t.AnchoredSprite(i, 0, 0, "Sprites", "rastr"), this.add(this._spot), this.add(this._circle), this.position.set(t.Gameplay.KICK_SPOT_CENTER_X, t.Gameplay.FLOOR_LEVEL - t.Gameplay.KICK_SPOT_CENTER_Y)
		}
		return __extends(i, e), i.prototype.setPosition = function(t) {
			var e = t.y;
			if (e >= 0)
				if (t.x < 300) this.y = e;
				else {
					var i = (1 - Phaser.Math.clamp((t.x - 300) / 300, 0, 1)) / 2 + .5;
					this.y = Phaser.Math.linear(this.y, e, i)
				} var a = 1 + Math.max(0, t.x - this.x) / 1280;
			this._circle.scale.set(a, a), this._circle.angle = (this._circle.angle + 10 * this.game.time.physicsElapsed) % 360
		}, i
	}(Phaser.Group);
	t.Crosshair = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(t) {
		function e(e, i, a) {
			t.call(this, e, 0, 0, i, a), this.onFadeFinished = new Phaser.Signal, this._fadeRunning = !1, this.width = e.width, this.height = e.height, this.exists = !1, this.visible = !1
		}
		return __extends(e, t), Object.defineProperty(e.prototype, "fade", {
			set: function(t) {
				this.alpha = t, this.visible = t > 0
			},
			enumerable: !0,
			configurable: !0
		}), e.prototype.isRunning = function() {
			return this._fadeRunning
		}, e.prototype.fadeIn = function(t, i) {
			if (void 0 === t && (t = e.FADE_TIME_IN), void 0 === i && (i = 0), !this._fadeRunning) {
				this.alpha = 0, this.exists = !0, this._fadeRunning = !0;
				var a = this.game.add.tween(this);
				a.to({
					alpha: 1
				}, t, Helper.Easing.halfSin, !0, i), a.onComplete.addOnce(function() {
					this.exist = !1, this.visible = !1, this._fadeRunning = !1, this.onFadeFinished.dispatch(!0)
				}, this)
			}
		}, e.prototype.fadeOut = function(t, i) {
			if (void 0 === t && (t = e.FADE_TIME_OUT), void 0 === i && (i = 0), !this._fadeRunning) {
				this.alpha = 0, this.exists = !0, this.visible = !0, this._fadeRunning = !0;
				var a = this.game.add.tween(this);
				a.to({
					alpha: 1
				}, t, Phaser.Easing.Sinusoidal.Out, !0, i), a.onComplete.addOnce(function() {
					this.exist = !1, this._fadeRunning = !1, this.onFadeFinished.dispatch(!1)
				}, this)
			}
		}, e.FADE_TIME_IN = 250, e.FADE_TIME_OUT = 250, e
	}(Phaser.Sprite);
	t.Fader = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(t) {
		function e(e, i, a, s) {
			t.call(this, e, i);
			var n = e.cache.getFrameByName("Sprites", a),
				o = e.add.sprite(0, 0, "Sprites", a, this);
			o.anchor.set(0, s), this._part1Crop = new Phaser.Rectangle(0, 0, 0, n.height), o.crop(this._part1Crop, !1), this._part1 = o, o = e.add.sprite(0, 0, "Sprites", a, this), o.anchor.set(0, s), this._part2Crop = new Phaser.Rectangle(0, 0, 0, n.height), o.crop(this._part2Crop, !1), this._part2 = o
		}
		return __extends(e, t), e.prototype.move = function(t) {
			0 > t && (t += 640);
			var e = Math.floor(t) % 640;
			this._part1Crop.x = e, this._part1Crop.width = 640 - e, this._part1.updateCrop(), this._part2Crop.width = e, this._part2.x = 640 - e, this._part2.updateCrop()
		}, e
	}(Phaser.Group);
	t.ParalaxLayer = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(e) {
		function i(t) {
			e.call(this, t, 112, i.Y, "Sprites"), this._yVel = 0, this._inAir = !1, this.anchor.set(.5, 1), this.animations.add("run", i.ANIM_RUN, 8, !0), this.animations.add("fall", i.ANIM_FALL, 6, !1).onComplete.add(function(t) {
				t.animations.play("fall2")
			}, this), this.animations.add("fall2", i.ANIM_FALL2, 4, !0), this.animations.add("fall_back", i.ANIM_FALL_BACK, 4, !1).onComplete.add(function(t) {
				t.animations.play("fall_back2")
			}, this), this.animations.add("fall_back2", i.ANIM_FALL_BACK2, 2, !0), this.animations.add("stand", i.ANIM_STAND, 6, !0), this.animations.add("head", i.ANIM_HEAD, 6, !0).onLoop.add(function() {
				this._inAir = !1
			}, this), this.animations.add("fail_kick", i.ANIM_FAIL_KICK, 12, !1).onComplete.add(function(t) {
				t.animations.play("fall")
			}, this), this.animations.add("fail_kick2", i.ANIM_FAIL_KICK2, 12, !1).onComplete.add(function(t) {
				t.animations.play("fall_back")
			}, this), this.animations.add("kick", i.ANIM_KICK, 6, !1).onComplete.add(function(t) {
				this._inAir = !1, t.animations.play("run")
			}, this), this.animations.play("run")
		}
		return __extends(i, e), i.prototype.playAnim = function(t) {
			this.animations.play(t)
		}, i.prototype.fail = function(t, e, a) {
			this.y = i.Y, a ? t || e ? this.playAnim("fail_kick2") : this.playAnim("fail_kick") : e ? this.playAnim("fall_back") : this.playAnim("fail_kick")
		}, i.prototype.kick = function(e) {
			e >= 150 && (this.y = t.Gameplay.FLOOR_LEVEL - e + this.height, this._inAir = !0), e >= 200 ? (this.animations.play("head"), Utils.AudioUtils.playSound("head")) : (this.animations.play("kick"), Utils.AudioUtils.playSound("kick")), this._yVel = 0
		}, i.prototype.move = function() {
			this._inAir || this.y < i.Y && (this._yVel += t.Gameplay.GRAVITY * this.game.time.physicsElapsed * 5, this.y += this._yVel * this.game.time.physicsElapsed, this.y >= i.Y && (this.y = i.Y, this.animations.play("run")))
		}, i.Y = 532, i.ANIM_RUN = ["beh1", "beh2", "beh3", "beh2"], i.ANIM_KICK = ["kop1"], i.ANIM_FAIL_KICK = ["kop1", "kop2", "kop3", "kop3", "kop3", "kop3"], i.ANIM_FAIL_KICK2 = ["kop1", "kop2", "kop3", "kop3"], i.ANIM_FALL = ["padani1"], i.ANIM_FALL2 = ["padani2", "padani3"], i.ANIM_FALL_BACK = ["padani4"], i.ANIM_FALL_BACK2 = ["padani5", "padani6"], i.ANIM_STAND = ["stoj"], i.ANIM_HEAD = ["hlavicka"], i
	}(Phaser.Sprite);
	t.Player = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(t) {
		function e(e, i) {
			t.call(this, e, i);
			var a = new Phaser.Sprite(e, 0, 0, "Sprites", "Score");
			a.anchor.set(0, .5), this.add(a);
			var s = new Phaser.Sprite(e, 0, 0, "Sprites", "ScoreBg");
			s.anchor.set(.5, .5), this.add(s);
			var n = a.width + 10 + s.width,
				o = Math.floor(n / 2);
			a.x = -o, s.x = a.x + a.width + 10 + s.width / 2, this._valueText = new Phaser.BitmapText(e, s.x, 0, "Font", "0", 30, "left"), this._valueText.anchor.set(.5, .35), this.add(this._valueText)
		}
		return __extends(e, t), Object.defineProperty(e.prototype, "value", {
			set: function(t) {
				this._valueText.text = "" + t
			},
			enumerable: !0,
			configurable: !0
		}), e
	}(Phaser.Group);
	t.ScoreBoard = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(t) {
		function e(e) {
			t.call(this, e, e.width / 2, 150, "Sprites", "perfect"), this.anchor.set(.5, .5), this._tweenScale = e.add.tween(this.scale).to({
				x: .5,
				y: .5
			}, 1500, Phaser.Easing.Linear.None, !1, 200), this._tweenScale.onComplete.add(function() {
				this.visible = !1
			}, this), this._tweenAlphaMoveX = e.add.tween(this).to({
				alpha: 0,
				x: e.width / 2 + 100
			}, 1450, Phaser.Easing.Linear.None, !1, 200), this._tweenMoveY = e.add.tween(this).to({
				y: 50
			}, 1450, Phaser.Easing.Sinusoidal.In, !1, 200), this._tweenShout = e.add.tween(this.scale).to({
				x: 1.5,
				y: 1.5
			}, 1200, function(t) {
				return Math.abs(Helper.Easing.sinWithExpDecay(t, 2, .75))
			}, !1, 200), this._tweenShout.onComplete.add(function() {
				this.visible = !1
			}, this)
		}
		return __extends(e, t), e.prototype.show = function() {
			this.visible = !0, this.scale.set(1, 1), this.alpha = 1, "perfect" === this.frameName || "missed" === this.frameName ? (this.position.set(this.game.width / 2, 150), this._tweenScale.start(), this._tweenAlphaMoveX.start(), this._tweenMoveY.start()) : (this.position.set(this.game.width / 2, 250), this._tweenShout.start())
		}, e
	}(Phaser.Sprite);
	t.Title = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(e) {
		function i(i, a) {
			e.call(this, i, a), this.classType = t.Title, this.createMultiple(5, "Sprites", "perfect", !1)
		}
		return __extends(i, e), i.prototype.show = function(t) {
			for (var e = 0; e < this.length; e++) {
				var i = this.getChildAt(e);
				if (!i.visible) {
					i.frameName = t, i.show();
					break
				}
			}
		}, i.prototype.hideAll = function() {
			for (var t = 0; t < this.length; t++) this.getChildAt(t).visible = !1
		}, i
	}(Phaser.Group);
	t.TitleLayer = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(e) {
		function i() {
			e.call(this), this._userScale = new Phaser.Point(1, 1), this._gameDims = new Phaser.Point, this._forceResize = !0
		}
		return __extends(i, e), i.prototype.init = function() {
			this.input.maxPointers = 1, t.Global.GAMEE && (this.stage.disableVisibilityChange = !0), this.calcGameDims(), this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE, this.scale.setGameSize(this._gameDims.x, this._gameDims.y), this.scale.setUserScale(this._userScale.x, this._userScale.y), this.scale.pageAlignHorizontally = !0, this.scale.pageAlignVertically = !0, this.scale.setResizeCallback(this.gameResized, this), this.game.device.desktop || (this.scale.forceOrientation(!0, !1), this.scale.onOrientationChange.add(this.orientationChange, this)), this.androidUnlockAudio()
		}, i.prototype.androidUnlockAudio = function() {
			this.game.device.android && this.game.device.chrome && this.game.device.chromeVersion >= 55 && (this.game.sound.touchLocked = !0, this.game.input.touch.addTouchLockCallback(function() {
				if (this.noAudio || !this.touchLocked || null !== this._unlockSource) return !0;
				if (this.usingWebAudio) {
					var t = this.context.createBuffer(1, 1, 22050);
					this._unlockSource = this.context.createBufferSource(), this._unlockSource.buffer = t, this._unlockSource.connect(this.context.destination), void 0 === this._unlockSource.start ? this._unlockSource.noteOn(0) : this._unlockSource.start(0), "suspended" === this._unlockSource.context.state && this._unlockSource.context.resume()
				}
				return !0
			}, this.game.sound, !0))
		}, i.prototype.create = function() {
			this.game.state.start("Preloader", !0, !1)
		}, i.prototype.calcGameDims = function() {
			var e = window.innerWidth,
				i = window.innerHeight;
			e > i && (e = i * (640 / 1073));
			var a = (e + .01) / t.Global.GAME_WIDTH,
				s = Math.round(i / (e / t.Global.GAME_WIDTH)),
				n = (i + .01) / s;
			this._userScale.set(a, n), this._gameDims.set(t.Global.GAME_WIDTH, s)
		}, i.prototype.gameResized = function(t, e) {
			if (!t.incorrectOrientation) {
				var i = this._userScale.x,
					a = this._userScale.y;
				this.calcGameDims();
				var s = this._gameDims,
					n = this._userScale;
				if (s.x !== this.game.width || s.y !== this.game.height || Math.abs(n.x - i) > .001 || Math.abs(n.y - a) > .001 || this._forceResize) {
					this._forceResize = !1, this.scale.setGameSize(s.x, s.y), this.scale.setUserScale(n.x, n.y);
					var o = this.game.state.getCurrentState();
					"function" == typeof o.onResize && o.onResize(s.x, s.y)
				}
			}
		}, i.prototype.orientationChange = function(t, e, i) {}, i
	}(Phaser.State);
	t.Boot = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(t) {
		function e() {
			t.call(this), this._restartCounter = 1
		}
		return __extends(e, t), e.prototype.create = function() {
			var t = this.add.image(0, 0, "Intro");
			t.inputEnabled = !0, t.events.onInputDown.add(function() {
				this._pressed = !0
			}, this), this._once = !1, this._pressed = !1
		}, e.prototype.onGameeRestart = function() {
			--this._restartCounter <= 0 && (this._pressed = !0, Utils.AudioUtils.playSound("start"))
		}, e.prototype.onGameeButtonDown = function(t) {
			this._pressed = !0
		}, e.prototype.update = function() {
			this._once || this._pressed && (this._once = !0, Gamee.Gamee.instance.gameStart(), this.game.state.start("Play"))
		}, e
	}(Phaser.State);
	t.Menu = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(e) {
		function i() {
			e.call(this), this._ready = !1
		}
		return __extends(i, e), i.prototype.preload = function() {
			var e = "assets/";
			this.game.device.ie ? (this.load.audio("fail", "assets/sfx/fail.mp3"), this.load.audio("start", "assets/sfx/start.mp3"), this.load.audio("head", "assets/sfx/head.mp3"), this.load.audio("kick", "assets/sfx/kick.mp3"), this.load.audio("perfect", "assets/sfx/perfect.mp3"), t.Global.REBRAND, this.load.audio("Music", ["assets/sfx/ambience.mp3"])) : (this.load.audio("SFX", ["assets/sfx/sfx.ogg", "assets/sfx/sfx.m4a"]), this.load.audio("Music", ["assets/sfx/ambience.ogg", "assets/sfx/ambience.m4a"])), this.load.image("Tutorial", e + "Tutorial.png"), this.load.atlas("Sprites", e + "Sprites.png", e + "Sprites.json"), this.load.xml("Font", e + "font.xml"), this.load.json("Config", e + "config.json")
		}, i.prototype.loadUpdate = function() {
			this.setLoadingText(this.load.progress), t.Global.FACEBOOK && window.FBInstant.setLoadingProgress(this.load.progress)
		}, i.prototype.create = function() {
			this.cache.addBitmapFontFromImage("Font", null, "Sprites", this.cache.getXML("Font"), "xml"), this.readConfig();
			var e = this.add.audio("Music");
			e.volume = .3, Utils.AudioUtils.addMusic("Music", e);
			var i = 0;
			if (this.game.device.ie || Phaser.Device.isAndroidStockBrowser()) {
				i = .02, Utils.AudioUtils.setSounds(null);
				var e = this.add.audio("fail");
				e.allowMultiple = !0, Utils.AudioUtils.addSound("fail", e), e = this.add.audio("start"), e.allowMultiple = !0, Utils.AudioUtils.addSound("start", e), e = this.add.audio("head"), e.allowMultiple = !0, Utils.AudioUtils.addSound("head", e), e = this.add.audio("kick"), e.allowMultiple = !0, Utils.AudioUtils.addSound("kick", e), e = this.add.audio("perfect"), e.allowMultiple = !0, Utils.AudioUtils.addSound("perfect", e), t.Global.REBRAND
			} else {
				this.game.device.iOS && (i = .1);
				var a = this.add.audio("SFX");
				Utils.AudioUtils.setSounds(a), a.allowMultiple = !0, a.addMarker("fail", 0, 2.8395), a.addMarker("head", 4 - i, 1.08 + i), a.addMarker("kick", 7 - i, .88 + i), a.addMarker("perfect", 9 - i, 4.84 + i), a.addMarker("start", 15 - i, 3 + i), t.Global.REBRAND
			}
		}, i.prototype.readConfig = function() {
			var e = this.game.cache.getJSON("Config");
			void 0 !== e.NEXT_BALL_TIME_MIN && (t.Gameplay.NEXT_BALL_TIME_MIN = e.NEXT_BALL_TIME_MIN), void 0 !== e.NEXT_BALL_TIME_MAX && (t.Gameplay.NEXT_BALL_TIME_MAX = e.NEXT_BALL_TIME_MAX), void 0 !== e.THREE_BALLS_SCORE && (t.Gameplay.THREE_BALLS_SCORE = e.THREE_BALLS_SCORE), void 0 !== e.TWO_BALLS_SCORE && (t.Gameplay.TWO_BALLS_SCORE = e.TWO_BALLS_SCORE), void 0 !== e.KICK_SPOT_LIMIT_X_FAIL && (t.Gameplay.KICK_SPOT_LIMIT_X_FAIL = e.KICK_SPOT_LIMIT_X_FAIL), void 0 !== e.KICK_SPOT_LIMIT_PERFECT_PERCENT && (t.Gameplay.KICK_SPOT_LIMIT_PERFECT_PERCENT = e.KICK_SPOT_LIMIT_PERFECT_PERCENT), void 0 !== e.MIN_KICK_SPEED_START && (t.Gameplay.MIN_KICK_SPEED_START = e.MIN_KICK_SPEED_START), void 0 !== e.MAX_KICK_SPEED_START && (t.Gameplay.MAX_KICK_SPEED_START = e.MAX_KICK_SPEED_START), void 0 !== e.MIN_KICK_SPEED_END && (t.Gameplay.MIN_KICK_SPEED_END = e.MIN_KICK_SPEED_END), void 0 !== e.MAX_KICK_SPEED_END && (t.Gameplay.MAX_KICK_SPEED_END = e.MAX_KICK_SPEED_END), void 0 !== e.MIN_KICK_SPEED_STEPS && (t.Gameplay.MIN_KICK_SPEED_STEPS = e.MIN_KICK_SPEED_STEPS), void 0 !== e.MAX_KICK_SPEED_STEPS && (t.Gameplay.MAX_KICK_SPEED_STEPS = e.MAX_KICK_SPEED_STEPS)
		}, i.prototype.update = function() {
			var t = this.game.device.ie || this.cache.isSoundDecoded("SFX");
			t && this.cache.isSoundDecoded("Music") && this._ready === !1 && (this._ready = !0, this.game.state.start("Play"))
		}, i.prototype.setLoadingText = function(t) {}, i
	}(Phaser.State);
	t.Preloader = e
}(FootballStar || (FootballStar = {}));
var FootballStar;
! function(t) {
	var e = function(e) {
		function i() {
			e.call(this), this._ballsPool = [], this._balls = [], this._gameOver = !1, this._runFromRestart = !1, this._resetTime = 0, this._soundInCallback = !1, this._hlpVec = new Phaser.Point, this._fbGameRunning = !1, this._fbGameReady = !1, this._firstUpdateTime = 0, this._scoreBoard = null, this._tutorial = null, this._tutorialOnScreen = !1, this._tutorialShown = !1, this._watermark = null
		}
		return __extends(i, e), i.prototype.onResize = function(t, e) {
			this.setView(t, e);
			var i = this.world.bounds.y;
			this._fader.width = t, this._fader.height = e, this._fader.y = i, this._bg.onResize(e), this._konfetyEmitter.y = i, this._konfetyEmitter.area.width = t, null !== this._scoreBoard && (this._scoreBoard.y = i + 50), null !== this._watermark && this._watermark.position.set(this.game.width / 2, this.world.bounds.bottom - 40)
		}, i.prototype.setView = function(t, e) {
			var i = e - 640,
				a = Math.floor(.197 * i);
			this.world.setBounds(0, -a, t, e), this.camera.focusOnXY(0, 0)
		}, i.prototype.create = function() {
			this.setView(this.game.width, this.game.height), this.stage.backgroundColor = 5420964, this._bg = new t.Background(this.game, this.world), this._bg.onResize(this.game.height), this._titleLayer = new t.TitleLayer(this.game, this.world), this._path = new t.BallPath(this.rnd), this._crosshair = new t.Crosshair(this.game, this.world), this._fader = new t.Fader(this.game, "Sprites", "bila"), this._fader.width = this.game.width, this._fader.height = this.game.height, this._fader.y = this.world.bounds.y, this.world.add(this._fader), this._shadowPlayer = this.add.sprite(112, 530, "Sprites", "stin"), this._shadowPlayer.anchor.set(.5, .5), this._shadowPlayer.scale.x = 1;
			for (var e = [], a = 0; a < i.BALLS_MAX; a++) {
				var s = this.add.sprite(800, 530, "Sprites", "stin");
				s.anchor.set(.5, .5), e.push(s)
			}
			this._player = new t.Player(this.game), this.world.add(this._player);
			for (var a = 0; a < i.BALLS_MAX; a++) {
				var n = new t.Ball(this.game, this.world, e[a]);
				n.id = a, n.name = "ball " + a, this._ballsPool.push(n)
			}
			this.createEmitters(), this._konfetyEmitter.y = this.world.bounds.y, this._kickKey = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR), this._kickKey.onDown.add(this.handleInput, this);
			var o = this;
			this.game.input.onDown.add(this.handleInput, this), t.Global.FACEBOOK && (this._scoreBoard = new t.ScoreBoard(this.game, this.world), this._scoreBoard.position.set(this.game.width / 2, this.world.bounds.y + 50), this._tutorial = new Phaser.Sprite(this.game, this.game.width / 2, 160, "Tutorial"), this._tutorial.anchor.set(.5), this._tutorial.exists = !1, this.world.add(this._tutorial), this._watermark = new Phaser.Sprite(this.game, this.game.width / 2, this.world.bounds.bottom - 40, "Sprites", "GameeWatermark"), this._watermark.anchor.set(.5, 1), this.world.add(this._watermark)), this.reset(), t.Global.FACEBOOK && window.FBInstant.startGameAsync().then(function() {
				o._fbGameReady = !0, o._ignoreFirstKickIfTooFast = !0, o._kickTime = o.time.time, o._fbGameRunning = !0, Utils.AudioUtils.playMusic("Music")
			})
		}, i.prototype.handleInput = function() {
			var t = this.time.time;
			0 === this._firstUpdateTime || t - this._firstUpdateTime < i.KICK_DELAY || this._fbGameRunning && this._ignoreFirstKickIfTooFast && t - this._kickTime < i.KICK_DELAY || (this._ignoreFirstKickIfTooFast = !1, this._kickDown = !0)
		}, i.prototype.onGameePause = function() {
			this.game.paused = !0
		}, i.prototype.onGameeUnpause = function() {
			this.game.paused = !1
		}, i.prototype.onGameeRestart = function() {
			t.Global.game.paused = !1, this.reset(), Gamee.Gamee.instance.gameRunning || (Gamee.Gamee.instance.gameStart(), this._resetTime = this.game.time.time), Utils.AudioUtils.playSound("start"), this._soundInCallback = !0
		}, i.prototype.onGameeButtonDown = function(t) {
			var e = Gamee.Gamee.instance;
			this.game.time.time - this._resetTime < i.KICK_DELAY || (e.gameRunning ? (this._kickDown = !0, this._soundInCallback || (Utils.AudioUtils.playSound("perfect"), this._soundInCallback = !0)) : this._runFromRestart || (e.gameStart(), Utils.AudioUtils.playSound("start")))
		}, i.prototype.onGameeButtonUp = function(t) {
			var e = Gamee.Gamee.instance;
			e.gameRunning
		}, i.prototype.reset = function() {
			this._gameOver = !1, this._maxActiveBalls = 1, this._spawnBalls = 0, this._nextBallTime = 0, this._kickDown = !1, this._kickKey.justDown, this._kickTime = 0, this._ignoreFirstKickIfTooFast = !1, this._score = 0, this._perfectCount = 0, this._bonusBall = !1, t.Global.GAMEE && (Gamee.Gamee.instance.score = 0), null !== this._scoreBoard && (this._scoreBoard.value = 0), this._kickCount = 0;
			for (var e = this._ballsCount - 1; e >= 0; e--) {
				var a = this._balls[e];
				this.clearBall(a)
			}
			for (var e = 0; e < i.BALLS_MAX; e++) {
				var a = this._ballsPool[e];
				a.exists = !1, a.x = -100, a.updateShadowPos()
			}
			this._ballsCount = 0, this.resetBall(t.Gameplay.BALL_X_VEL), this._kickEmitter.killAllParticles(), this._konfetyEmitter.killAllParticles(), this._player.playAnim("run"), this._titleLayer.hideAll(), this._lastNasri = 0, t.Global.FACEBOOK || Utils.AudioUtils.playMusic("Music"), this._resetTime = 0
		}, i.prototype.getFreeBall = function() {
			for (var t = 0; t < i.BALLS_MAX; t++) {
				var e = this._ballsPool[t];
				if (!e.exists) return this._balls[this._ballsCount++] = e, e.exists = !0, e
			}
			return null
		}, i.prototype.clearBall = function(t) {
			t.exists = !1, t.x = -100, t.updateShadowPos();
			for (var e = -1, i = 0; i < this._ballsCount; i++)
				if (this._balls[i] === t) {
					e = i;
					break
				} for (--this._ballsCount; e < this._ballsCount; e++) this._balls[e] = this._balls[e + 1]
		}, i.prototype.resetBall = function(e) {
			if (!(this._ballsCount >= this._maxActiveBalls || this._gameOver)) {
				if (this._spawnBalls >= this._maxActiveBalls) {
					if (0 !== this._ballsCount) return;
					this._spawnBalls = 0
				} else if (this._nextBallTime > 0) return;
				var i = 0;
				if ("undefined" == typeof e) {
					var a = Math.min((t.Gameplay.MIN_KICK_SPEED_END - t.Gameplay.MIN_KICK_SPEED_START) / t.Gameplay.MIN_KICK_SPEED_STEPS * this._kickCount, t.Gameplay.MIN_KICK_SPEED_END - t.Gameplay.MIN_KICK_SPEED_START) + t.Gameplay.MIN_KICK_SPEED_START,
						s = Math.min((t.Gameplay.MAX_KICK_SPEED_END - t.Gameplay.MAX_KICK_SPEED_START) / t.Gameplay.MAX_KICK_SPEED_STEPS * this._kickCount, t.Gameplay.MAX_KICK_SPEED_END - t.Gameplay.MAX_KICK_SPEED_START) + t.Gameplay.MAX_KICK_SPEED_START;
					if (this._ballsCount > 0) {
						var n = this._balls[this._ballsCount - 1];
						if (n.x > t.Gameplay.KICK_SPOT_CENTER_X) {
							var o = n.x - t.Gameplay.KICK_SPOT_CENTER_X,
								r = o / n.speed,
								l = 640 + t.Gameplay.BALL_RADIUS - (t.Gameplay.KICK_SPOT_CENTER_X + 250),
								h = l / r / t.Gameplay.BALL_X_VEL;
							if (a >= h) return void(this._nextBallTime = this.rnd.realInRange(t.Gameplay.NEXT_BALL_TIME_MIN, t.Gameplay.NEXT_BALL_TIME_MAX));
							s = Math.min(h, s)
						}
					}
					i = t.Gameplay.BALL_X_VEL * this.rnd.realInRange(a, s)
				} else i = e;
				var c = this.getFreeBall();
				++this._spawnBalls, c.setSwoosh(!1), c.bonus = this._bonusBall, this._bonusBall = !1, c.speed = i, this._path.reset(c.id, c.speed), c.x = 640 + t.Gameplay.BALL_RADIUS;
				var _ = Phaser.Math.radToDeg(c.speed / 64);
				c.angularSpeed = this.rnd.realInRange(_ / 10, _ / 2), c.state = 0, this._nextBallTime = this.rnd.realInRange(t.Gameplay.NEXT_BALL_TIME_MIN, t.Gameplay.NEXT_BALL_TIME_MAX)
			}
		}, i.prototype.update = function() {
			if (t.Global.FACEBOOK && this._fbGameRunning && 0 === this._firstUpdateTime && (this._firstUpdateTime = this.game.time.time), t.Global.GAMEE && !Gamee.Gamee.instance.gameRunning || t.Global.FACEBOOK && !this._fbGameRunning) return this._player.move(), this._shadowPlayer.scale.x = this._player.y / t.Gameplay.FLOOR_LEVEL, void(this._gameOver || (this._bg.move(), t.Global.GAMEE && this._kickDown && (this.onGameeButtonDown("button"), this._kickDown = !1), t.Global.FACEBOOK && this._kickDown && (this._fbGameRunning = !0, this._kickDown = !1)));
			if (!t.Global.FACEBOOK || this._fbGameReady) {
				var e = this._balls[0];
				if (this._gameOver || !this._tutorialShown && null !== this._tutorial && e.x <= this._crosshair.x && (this._tutorial.exists = !0, this._tutorialOnScreen = !0, this._tutorialShown = !0, e.x = this._crosshair.x), 0 === e.state) {
					if (this._kickDown) {
						this._tutorialOnScreen && (this._tutorial.exists = !1, this._tutorialOnScreen = !1);
						var i = Math.abs(e.x - t.Gameplay.KICK_SPOT_CENTER_X);
						if (i > t.Gameplay.KICK_SPOT_LIMIT_X_FAIL) t.Global.REBRAND && this.game.time.events.add(350, function() {
							this._titleLayer.show("missed")
						}, this), this.setGameOver(!0);
						else {
							this._tutorialShown = !0;
							var a = 1;
							i < t.Gameplay.KICK_SPOT_LIMIT_X_FAIL * t.Gameplay.KICK_SPOT_LIMIT_PERFECT_PERCENT ? (a = 2, this._titleLayer.show("perfect"), Utils.AudioUtils.playSound("perfect"), ++this._perfectCount, this._bonusBall = 2 === this._perfectCount, this._perfectCount >= 3 && (a *= 2, this._perfectCount = 0, this._titleLayer.show("goal"), Utils.AudioUtils.playSound("perfect"), t.Global.REBRAND && this.time.time - this._lastNasri > 1e4 && (this._lastNasri = this.time.time), this._konfetyEmitter.flow(100, 3, 50, !0))) : (this._perfectCount = 0, this._bonusBall = !1), this._score += a, t.Global.GAMEE ? Gamee.Gamee.instance.addScore(a) : t.Global.FACEBOOK && window.FBInstant.setScore(this._score), null !== this._scoreBoard && (this._scoreBoard.value = this._score), this._score > t.Gameplay.THREE_BALLS_SCORE ? this._maxActiveBalls = 3 : this._score > t.Gameplay.TWO_BALLS_SCORE ? this._maxActiveBalls = 2 : this._maxActiveBalls = 1, ++this._kickCount, e.state = 1, e.speed *= 2, e.yVelocity = -500 * ((t.Gameplay.FLOOR_LEVEL - t.Gameplay.BALL_RADIUS - e.y) / t.Gameplay.MAX_REACHABLE_HEIGHT), e.yVelocity += this.rnd.realInRange(-500, 0), this._player.kick(t.Gameplay.FLOOR_LEVEL - this._crosshair.y), e.setSwoosh(!0);
							var s = this._hlpVec;
							s.set(this._player.x - e.x, this._player.y - e.y), s.setMagnitude(t.Gameplay.BALL_RADIUS), this._kickEmitter.position.set(e.x + s.x, e.y + s.y), this._kickEmitter.angle = Phaser.Math.radToDeg(Math.atan2(s.y, s.x)), this._kickEmitter.explode(20)
						}
					}
					this._kickDown = !1
				}
				this._player.move(), this._shadowPlayer.scale.x = this._player.y / t.Gameplay.FLOOR_LEVEL, this._gameOver || this._bg.move();
				for (var n = 0; n < this._ballsCount; n++) {
					var o = this._balls[n];
					if (0 === o.state && o.x > t.Gameplay.KICK_SPOT_CENTER_X || n === this._ballsCount - 1) {
						this._crosshair.setPosition(o);
						break
					}
				}
				for (var r = function(i) {
						if (e = l._balls[i], l._tutorialOnScreen || e.move(l._path), l._gameOver) {
							if (3 === e.state) l.time.time > l._gameOverTime + t.Gameplay.FAIL_TIME && (e.state = 2);
							else if (2 === e.state && e.x < -t.Gameplay.BALL_RADIUS)
								if (e.state = 4, t.Global.GAMEE) l._runFromRestart = !0, Gamee.Gamee.instance.gameOver();
								else if (t.Global.FACEBOOK) {
								var a = l;
								a._fbGameRunning = !1, Utils.AudioUtils.stopMusic(), window.FBInstant.takeScreenshotAsync().then(function() {
									window.FBInstant.endGameAsync().then(function() {
										a.reset(), a._ignoreFirstKickIfTooFast = !0, a._kickTime = a.time.time, a._fbGameRunning = !0, Utils.AudioUtils.playMusic("Music")
									})
								})["catch"](function() {})
							} else l.reset()
						} else 0 === e.state ? e.x < t.Gameplay.KICK_SPOT_CENTER_X - t.Gameplay.KICK_SPOT_LIMIT_X_FAIL && (t.Global.REBRAND && l.game.time.events.add(350, function() {
							this._titleLayer.show("missed")
						}, l), l.setGameOver(!1)) : 1 === e.state && (e.x > 640 + t.Gameplay.BALL_RADIUS || e.y < 0 - t.Gameplay.BALL_RADIUS) && (l.clearBall(e), l.resetBall())
					}, l = this, n = this._ballsCount - 1; n >= 0; n--) r(n);
				this._nextBallTime > 0 && (this._nextBallTime -= this.time.physicsElapsed) < 0 && (this._nextBallTime = 0, this.resetBall())
			}
		}, i.prototype.setGameOver = function(e) {
			if (!this._gameOver) {
				this._gameOver = !0, this._gameOverTime = this.time.time;
				for (var i = this._balls[0], a = 0; a < this._ballsCount; a++) 1 !== this._balls[a].state && (this._balls[a].state = 3);
				this._player.fail(i.x > t.Gameplay.KICK_SPOT_CENTER_X, t.Gameplay.FLOOR_LEVEL - this._crosshair.y > 120, e), this.time.events.add(250, function() {
					this._fader.fadeIn(.5 * t.Gameplay.FAIL_TIME)
				}, this), Utils.AudioUtils.playSound("fail")
			}
		}, i.prototype.createEmitters = function() {
			var e = new t.ParticlesEmitter(this.game, 0, 0, 32);
			e.lifetime = .25, e.setXSpeed(-600, 100), e.setYSpeed(-400, 400), e.setAngularSpeed(0, 0), e.minParticleScale = .5, e.maxParticleScale = 2, e.setScaleChange(t.eParameterChangeType.IN_TIME, -1, .25), e.makeParticles("Sprites", "hlina"), this.world.add(e), this._kickEmitter = e, e = new t.ParticlesEmitter(this.game, 0, 0, 100), e.lifetime = 3, e.setXSpeed(-50, 50), e.setYSpeed(150, 200), e.setAngularSpeed(-90, 90), e.minParticleScale = .5, e.maxParticleScale = 1, e.area = new Phaser.Line(0, 0, this.game.width, 0), e.makeParticles("Sprites", ["konfeta1", "konfeta2", "konfeta3"], 1e3), this.world.add(e), this._konfetyEmitter = e
		}, i.BALLS_MAX = 3, i.KICK_DELAY = 250, i
	}(Phaser.State);
	t.Play = e
}(FootballStar || (FootballStar = {}));
var Utils;
! function(t) {
	var e = function() {
		function t() {}
		return t.setSounds = function(e, i) {
			void 0 === i && (i = null), t._sfx = e, t._sfxIds = i
		}, t.addSound = function(e, i) {
			t._sfxs[e] = i
		}, t.playSound = function(e) {
			var i;
			i = "number" == typeof e ? t._sfxIds[e] : e, FootballStar.Global.soundOn && (null !== t._sfx ? t._sfx.play(i) : void 0 !== t._sfxs[i] && t._sfxs[i].play())
		}, t.stopSound = function(e) {
			var i;
			i = "number" == typeof e ? t._sfxIds[e] : e, null !== t._sfx ? t._sfx.stop() : void 0 !== t._sfxs[i] && t._sfxs[i].stop()
		}, Object.defineProperty(t, "currentMusic", {
			get: function() {
				return t._currentMusic
			},
			enumerable: !0,
			configurable: !0
		}), Object.defineProperty(t, "isMusicPlaying", {
			get: function() {
				if (null === this._currentMusic || 0 === this._currentMusic.length) return !1;
				var e = t._music[t._currentMusic];
				return e.isPlaying
			},
			enumerable: !0,
			configurable: !0
		}), t.addMusic = function(e, i) {
			t._music[e] = i
		}, t.playMusic = function(e, i) {
			if (void 0 === i && (i = !0), t._currentMusic !== e && (null !== t._currentMusic && t._currentMusic.length > 0 && t.stopMusic(), e in t._music && FootballStar.Global.musicOn)) {
				t._currentMusic = e;
				var a = t._music[e];
				a.loop = i, a.play(), i || a.onStop.addOnce(function() {
					t.onFinished.dispatch(e)
				}, this)
			}
		}, t.stopMusic = function() {
			if (null !== t._currentMusic && t._currentMusic.length > 0) {
				var e = t._music[t._currentMusic];
				e.isPlaying && e.stop(), t._currentMusic = ""
			}
		}, t.pauseMusic = function() {
			if (null !== t._currentMusic && t._currentMusic.length > 0) {
				var e = t._music[t._currentMusic];
				e.isPlaying && e.pause()
			}
		}, t.resumeMusic = function() {
			if (null !== t._currentMusic && t._currentMusic.length > 0) {
				var e = t._music[t._currentMusic];
				e.paused && e.resume()
			}
		}, t._sfx = null, t._sfxs = {}, t._music = {}, t._currentMusic = "", t.onFinished = new Phaser.Signal, t
	}();
	t.AudioUtils = e
}(Utils || (Utils = {}));
var Utils;
! function(t) {
	var e = function() {
		function t() {}
		return t.supported = function() {
			var t = FootballStar.Global.game;
			return t.scale.compatibility.supportsFullScreen
		}, t.isFullscreen = function() {
			return FootballStar.Global.game.scale.isFullScreen
		}, t.changeFullscreen = function() {
			var e = FootballStar.Global.game;
			t._fullscreen ? e.scale.stopFullScreen() : e.scale.startFullScreen(!1, !1)
		}, t.onEnterFullscreen = function() {
			t._fullscreen = !0, null !== t._listener && t._listener.call(t._listenerContext, !0)
		}, t.onLeaveFullscreen = function() {
			t._fullscreen = !1, null !== t._listener && t._listener.call(t._listenerContext, !1)
		}, t.setListener = function(e, i) {
			t._listener = e, t._listenerContext = i
		}, t.removeListener = function() {
			t._listener = null, t._listenerContext = null
		}, t._fullscreen = !1, t._listener = null, t._listenerContext = null, t
	}();
	t.FullscreenUtils = e
}(Utils || (Utils = {}));
var Utils;
! function(t) {
	var e = function() {
		function t() {}
		return t.ChangeAnimationPhaserJSONData = function(t) {
			Phaser.AnimationParser.myCallback = t, Phaser.AnimationParser.JSONData = function(t, e) {
				if (e.frames) {
					for (var i = new Phaser.FrameData, a = e.frames, s = 0; s < a.length; s++) {
						var n = i.addFrame(new Phaser.Frame(s, a[s].frame.x, a[s].frame.y, a[s].frame.w, a[s].frame.h, a[s].filename));
						a[s].trimmed && n.setTrim(a[s].trimmed, a[s].sourceSize.w, a[s].sourceSize.h, a[s].spriteSourceSize.x, a[s].spriteSourceSize.y, a[s].spriteSourceSize.w, a[s].spriteSourceSize.h), Phaser.AnimationParser.myCallback(n, a[s])
					}
					return i
				}
			}
		}, t.AdjustTweenFunctions = function() {
			Phaser.TweenManager.prototype.removeFromUpdateQueue = function(t) {
				var e = this._tweens.indexOf(t); - 1 !== e ? this._tweens.splice(e, 1) : (e = this._add.indexOf(t), -1 !== e && this._add.splice(e, 1))
			}, Phaser.Tween.prototype.stopAndRemoveFromUpdateQueue = function(t) {
				var e = this,
					i = e.stop(t);
				return e.manager.removeFromUpdateQueue(e), e.pendingDelete = !1, i
			}
		}, t.AddBitmapFontAddMethod = function() {
			Phaser.Cache.prototype.addBitmapFontFromImage = function(t, e, i, a, s, n, o) {
				var r = this.getImage(i, !0),
					l = {
						url: e,
						data: r.data,
						font: null,
						base: r.base
					};
				void 0 === n && (n = 0), void 0 === o && (o = 0), "json" === s ? l.font = Phaser.LoaderParser.jsonBitmapFont(a, l.base, n, o) : l.font = Phaser.LoaderParser.xmlBitmapFont(a, l.base, n, o), this._cache.bitmapFont[t] = l, this._resolveURL(e, l)
			}
		}, t
	}();
	t.PhaserUtils = e
}(Utils || (Utils = {}));
var Utils;
! function(t) {
	var e = function() {
		function t() {}
		return t
	}();
	t.ScreenMetrics = e,
		function(t) {
			t[t.PORTRAIT = 0] = "PORTRAIT", t[t.LANDSCAPE = 1] = "LANDSCAPE"
		}(t.Orientation || (t.Orientation = {}));
	var i = t.Orientation,
		a = function() {
			function t() {}
			return t.calculateScreenMetrics = function(t, a, s, n, o) {
				void 0 === s && (s = i.LANDSCAPE);
				var r, l;
				r = window.innerWidth, l = window.innerHeight, r = Math.min(r, 1.5 * t), l = Math.min(l, 1.5 * a);
				var h = s === i.LANDSCAPE ? t / a : t / a,
					c = r / l,
					_ = 0,
					u = 0,
					p = 0,
					d = 0;
				c > h ? (d = a, p = 2 * Math.ceil(d * c / 2), p = Math.min(p, n), _ = (p - t) / 2, u = 0) : (p = t, d = 2 * Math.ceil(p / c / 2), d = Math.min(d, o), _ = 0, u = (d - a) / 2);
				var m = r / p,
					f = l / d;
				return this.screenMetrics = new e, this.screenMetrics.windowWidth = r, this.screenMetrics.windowHeight = l, this.screenMetrics.defaultGameWidth = t, this.screenMetrics.defaultGameHeight = a, this.screenMetrics.maxGameWidth = n, this.screenMetrics.maxGameHeight = o, this.screenMetrics.gameWidth = p, this.screenMetrics.gameHeight = d, this.screenMetrics.scaleX = m, this.screenMetrics.scaleY = f, this.screenMetrics.offsetX = _, this.screenMetrics.offsetY = u, this.screenMetrics
			}, t
		}();
	t.ScreenUtils = a
}(Utils || (Utils = {}));
var Utils;
! function(t) {
	var e = function() {
			function t() {}
			return t
		}(),
		i = function() {
			function t() {}
			return t.save = function() {
				if (t.localStorageSupported()) {
					var i = new e;
					i.musicOn = FootballStar.Global.musicOn, i.soundOn = FootballStar.Global.soundOn, i.currentLanguage = FootballStar.Global.currentLanguage;
					var a = JSON.stringify(i);
					localStorage.setItem("snowflake_save", a)
				}
			}, t.load = function() {
				if (t.localStorageSupported()) {
					var e = JSON.parse(localStorage.getItem("snowflake_save"));
					return null === e || void 0 === e ? !1 : (FootballStar.Global.musicOn = e.musicOn, FootballStar.Global.soundOn = e.soundOn, FootballStar.Global.currentLanguage = e.currentLanguage, !0)
				}
			}, t.localStorageSupported = function() {
				try {
					return "localStorage" in window && null !== window.localStorage
				} catch (t) {
					return !1
				}
			}, t
		}();
	t.StorageUtils = i
}(Utils || (Utils = {}));
var Utils;
! function(t) {
	var e = function() {
		function t() {}
		return t.padNumber = function(t, e, i) {
			void 0 === i && (i = "0");
			var a = t + "";
			return a.length >= e ? a : new Array(e - a.length + 1).join(i) + a
		}, t
	}();
	t.StringUtils = e
}(Utils || (Utils = {}));
var Utils;
! function(t) {
	var e = function() {
		function t() {}
		return t.isAndroidStockBrowser = function() {
			var t = navigator.userAgent,
				e = /Android/.test(t),
				i = /Chrome/.test(t);
			return e && !i
		}, t
	}();
	t.SystemUtils = e
}(Utils || (Utils = {}));
var Utils;
! function(t) {
	var e = function() {
		function t() {}
		return t.setTexts = function(e) {
			t._texts = e
		}, t.getText = function(e) {
			if (null === t._texts) return "Texts not set";
			var i = t._texts;
			if (void 0 === i[e]) return "";
			var a = i[e][FootballStar.Global.currentLanguage];
			return void 0 === a && (FootballStar.Global.currentLanguage = "en", a = i[e][FootballStar.Global.currentLanguage]), a
		}, t.game = null, t._texts = null, t
	}();
	t.TextUtils = e
}(Utils || (Utils = {}));
