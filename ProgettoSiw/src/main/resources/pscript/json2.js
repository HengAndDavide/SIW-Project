<!DOCTYPE html>

<html lang="en" class="   ">

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
<meta charset='utf-8'>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Language" content="en">


<title>JSON-js/json2.js at master · douglascrockford/JSON-js · GitHub</title>
<link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
<link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
<meta property="fb:app_id" content="1401488693436528">

<meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="douglascrockford/JSON-js" name="twitter:title" /><meta content="JSON-js - JSON in JavaScript" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/262641?v=2&amp;s=400" name="twitter:image:src" />
	<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/262641?v=2&amp;s=400" property="og:image" /><meta content="douglascrockford/JSON-js" property="og:title" /><meta content="https://github.com/douglascrockford/JSON-js" property="og:url" /><meta content="JSON-js - JSON in JavaScript" property="og:description" />

		<link rel="assets" href="https://assets-cdn.github.com/">
	<link rel="conduit-xhr" href="https://ghconduit.com:25035">


	<meta name="msapplication-TileImage" content="/windows-tile.png">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="selected-link" value="repo_source" data-pjax-transient>
	<meta name="google-analytics" content="UA-3769691-2">

	<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="971C8780:6A41:16BBF1F0:53F75EC0" name="octolytics-dimension-request_id" />




	<link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


	<meta content="authenticity_token" name="csrf-param" />
		<meta content="7DqF1vVhk5aTIJOdiWNcYknzHTiSyxO4hY5n4lwfDrKfsiRmeKxuQtoTTdxeS6jK4Zxfpxamx4dgIa1bA+/hoA==" name="csrf-token" />

		<link href="https://assets-cdn.github.com/assets/github-0ff84fd746ec438ae838fda906146542b65f0596.css" media="all" rel="stylesheet" type="text/css" />
			<link href="https://assets-cdn.github.com/assets/github2-a4a53418cdc0805f3fd16f3a679b2f42615f7a6c.css" media="all" rel="stylesheet" type="text/css" />



			<meta http-equiv="x-pjax-version" content="8e0bc18df2c07e81439868a6812a950e">


	<meta name="description" content="JSON-js - JSON in JavaScript">


	<meta content="262641" name="octolytics-dimension-user_id" /><meta content="douglascrockford" name="octolytics-dimension-user_login" /><meta content="1092277" name="octolytics-dimension-repository_id" /><meta content="douglascrockford/JSON-js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1092277" name="octolytics-dimension-repository_network_root_id" /><meta content="douglascrockford/JSON-js" name="octolytics-dimension-repository_network_root_nwo" />
	<link href="https://github.com/douglascrockford/JSON-js/commits/master.atom" rel="alternate" title="Recent Commits to JSON-js:master" type="application/atom+xml">

	</head>


	<body class="logged_out  env-production  vis-public page-blob">
	<a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
	<div class="wrapper">







	<div class="header header-logged-out">
	<div class="container clearfix">

	<a class="header-logo-wordmark" href="https://github.com/">
	<span class="mega-octicon octicon-logo-github"></span>
	</a>

	<div class="header-actions">
	<a class="button primary" href="/join">Sign up</a>
	<a class="button signin" href="/login?return_to=%2Fdouglascrockford%2FJSON-js%2Fblob%2Fmaster%2Fjson2.js">Sign in</a>
	</div>

	<div class="site-search repo-scope js-site-search">
	<form accept-charset="UTF-8" action="/douglascrockford/JSON-js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/douglascrockford/JSON-js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
	<input type="text"
		class="js-site-search-field is-clearable"
			data-hotkey="s"
				name="q"
					placeholder="Search"
						data-global-scope-placeholder="Search GitHub"
							data-repo-scope-placeholder="Search"
								tabindex="1"
									autocapitalize="off">
	<div class="scope-badge">This repository</div>
	</form>
	</div>

	<ul class="header-nav left">
	<li class="header-nav-item">
	<a class="header-nav-link" href="/explore">Explore</a>
	</li>
	<li class="header-nav-item">
	<a class="header-nav-link" href="/features">Features</a>
	</li>
	<li class="header-nav-item">
	<a class="header-nav-link" href="https://enterprise.github.com/">Enterprise</a>
	</li>
	<li class="header-nav-item">
	<a class="header-nav-link" href="/blog">Blog</a>
	</li>
	</ul>

	</div>
	</div>



	<div id="start-of-content" class="accessibility-aid"></div>
	<div class="site" itemscope itemtype="http://schema.org/WebPage">
	<div id="js-flash-container">

	</div>
	<div class="pagehead repohead instapaper_ignore readability-menu">
	<div class="container">

	<ul class="pagehead-actions">


	<li>
	<a href="/login?return_to=%2Fdouglascrockford%2FJSON-js"
		class="minibutton with-count star-button tooltipped tooltipped-n"
			aria-label="You must be signed in to star a repository" rel="nofollow">
	<span class="octicon octicon-star"></span>
	Star
	</a>

	<a class="social-count js-social-count" href="/douglascrockford/JSON-js/stargazers">
	4,523
	</a>

	</li>

	<li>
	<a href="/login?return_to=%2Fdouglascrockford%2FJSON-js"
		class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
			aria-label="You must be signed in to fork a repository" rel="nofollow">
	<span class="octicon octicon-repo-forked"></span>
	Fork
	</a>
	<a href="/douglascrockford/JSON-js/network" class="social-count">
	2,905
	</a>
	</li>
	</ul>

	<h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
	<span class="mega-octicon octicon-repo"></span>
	<span class="author"><a href="/douglascrockford" class="url fn" itemprop="url" rel="author"><span itemprop="title">douglascrockford</span></a></span><!--
	--><span class="path-divider">/</span><!--
	--><strong><a href="/douglascrockford/JSON-js" class="js-current-repository js-repo-home-link">JSON-js</a></strong>

	<span class="page-context-loader">
	<img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
		</span>

	</h1>
	</div><!-- /.container -->
	</div><!-- /.repohead -->

	<div class="container">
	<div class="repository-with-sidebar repo-container new-discussion-timeline  ">
	<div class="repository-sidebar clearfix">

	<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/douglascrockford/JSON-js/issues/counts">
	<div class="sunken-menu-contents">
	<ul class="sunken-menu-group">
	<li class="tooltipped tooltipped-w" aria-label="Code">
	<a href="/douglascrockford/JSON-js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /douglascrockford/JSON-js">
	<span class="octicon octicon-code"></span> <span class="full-word">Code</span>
	<img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
		</a>      </li>


		<li class="tooltipped tooltipped-w" aria-label="Pull Requests">
		<a href="/douglascrockford/JSON-js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /douglascrockford/JSON-js/pulls">
		<span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
		<span class="js-pull-replace-counter"></span>
		<img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
			</a>      </li>


			</ul>
			<div class="sunken-menu-separator"></div>
			<ul class="sunken-menu-group">

			<li class="tooltipped tooltipped-w" aria-label="Pulse">
			<a href="/douglascrockford/JSON-js/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /douglascrockford/JSON-js/pulse/weekly">
			<span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
			<img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
				</a>      </li>

				<li class="tooltipped tooltipped-w" aria-label="Graphs">
				<a href="/douglascrockford/JSON-js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /douglascrockford/JSON-js/graphs">
				<span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
				<img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
					</a>      </li>
					</ul>


					</div>
					</div>

					<div class="only-with-full-nav">


					<div class="clone-url open"
						data-protocol-type="http"
							data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
					<h3><strong>HTTPS</strong> clone URL</h3>
					<div class="input-group">
					<input type="text" class="input-mini input-monospace js-url-field"
						value="https://github.com/douglascrockford/JSON-js.git" readonly="readonly">
					<span class="input-group-button">
					<button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/douglascrockford/JSON-js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
					</span>
					</div>
					</div>


					<div class="clone-url "
						data-protocol-type="subversion"
							data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
					<h3><strong>Subversion</strong> checkout URL</h3>
					<div class="input-group">
					<input type="text" class="input-mini input-monospace js-url-field"
						value="https://github.com/douglascrockford/JSON-js" readonly="readonly">
					<span class="input-group-button">
					<button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/douglascrockford/JSON-js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
					</span>
					</div>
					</div>


					<p class="clone-options">You can clone with
					<a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
					or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
					<a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
					<span class="octicon octicon-question"></span>
					</a>
					</p>



					<a href="/douglascrockford/JSON-js/archive/master.zip"
						class="minibutton sidebar-button"
							aria-label="Download douglascrockford/JSON-js as a zip file"
								title="Download douglascrockford/JSON-js as a zip file"
									rel="nofollow">
					<span class="octicon octicon-cloud-download"></span>
					Download ZIP
					</a>
					</div>
					</div><!-- /.repository-sidebar -->

					<div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>


					<a href="/douglascrockford/JSON-js/blob/3d7767b6b1f3da363c625ff54e63bbf20e9e83ac/json2.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

					<!-- blob contrib key: blob_contributors:v21:3959457903090117269948de883ecb06 -->

					<div class="file-navigation">

					<div class="select-menu js-menu-container js-select-menu left">
					<span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
						data-master-branch="master"
							data-ref="master"
								title="master"
									role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
					<span class="octicon octicon-git-branch"></span>
					<i>branch:</i>
					<span class="js-select-button css-truncate-target">master</span>
					</span>

					<div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

					<div class="select-menu-modal">
					<div class="select-menu-header">
					<span class="select-menu-title">Switch branches/tags</span>
					<span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
					</div> <!-- /.select-menu-header -->

					<div class="select-menu-filters">
					<div class="select-menu-text-filter">
					<input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
					</div>
					<div class="select-menu-tabs">
					<ul>
					<li class="select-menu-tab">
					<a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
					</li>
					<li class="select-menu-tab">
					<a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
					</li>
					</ul>
					</div><!-- /.select-menu-tabs -->
					</div><!-- /.select-menu-filters -->

					<div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

					<div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


					<div class="select-menu-item js-navigation-item selected">
					<span class="select-menu-item-icon octicon octicon-check"></span>
					<a href="/douglascrockford/JSON-js/blob/master/json2.js"
						data-name="master"
							data-skip-pjax="true"
								rel="nofollow"
									class="js-navigation-open select-menu-item-text css-truncate-target"
										title="master">master</a>
										</div> <!-- /.select-menu-item -->
										</div>

										<div class="select-menu-no-results">Nothing to show</div>
										</div> <!-- /.select-menu-list -->

										<div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
										<div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


										</div>

										<div class="select-menu-no-results">Nothing to show</div>
										</div> <!-- /.select-menu-list -->

										</div> <!-- /.select-menu-modal -->
										</div> <!-- /.select-menu-modal-holder -->
										</div> <!-- /.select-menu -->

										<div class="button-group right">
										<a href="/douglascrockford/JSON-js/find/master"
											class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
												data-pjax
												data-hotkey="t"
													aria-label="Quickly jump between files">
										<span class="octicon octicon-list-unordered"></span>
										</a>
										<button class="js-zeroclipboard minibutton zeroclipboard-button"
											data-clipboard-text="json2.js"
												aria-label="Copy to clipboard"
													data-copied-hint="Copied!">
										<span class="octicon octicon-clippy"></span>
										</button>
										</div>

										<div class="breadcrumb">
										<span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/douglascrockford/JSON-js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">JSON-js</span></a></span></span><span class="separator"> / </span><strong class="final-path">json2.js</strong>
										</div>
										</div>


										<div class="commit file-history-tease">
										<img alt="Douglas Crockford" class="main-avatar js-avatar" data-user="262641" height="24" src="https://avatars3.githubusercontent.com/u/262641?s=140" width="24" />
											<span class="author"><a href="/douglascrockford" rel="author">douglascrockford</a></span>
											<time datetime="2014-02-04T12:40:39-08:00" is="relative-time">February 04, 2014</time>
											<div class="commit-title">
											<a href="/douglascrockford/JSON-js/commit/2468916ef05a9324d8e544ff04dd5200728e90a0" class="message" data-pjax="true" title="IE8">IE8</a>
											</div>

											<div class="participation">
											<p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>

											</div>
											<div id="blob_contributors_box" style="display:none">
											<h2 class="facebox-header">Users who have contributed to this file</h2>
											<ul class="facebox-user-list">
											<li class="facebox-user-list-item">
											<img alt="Douglas Crockford" class=" js-avatar" data-user="262641" height="24" src="https://avatars3.githubusercontent.com/u/262641?s=140" width="24" />
												<a href="/douglascrockford">douglascrockford</a>
											</li>
											</ul>
											</div>
											</div>

											<div class="file-box">
											<div class="file">
											<div class="meta clearfix">
											<div class="info file-name">
											<span>490 lines (372 sloc)</span>
											<span class="meta-divider"></span>
											<span>17.569 kb</span>
											</div>
											<div class="actions">
											<div class="button-group">
											<a href="/douglascrockford/JSON-js/raw/master/json2.js" class="minibutton " id="raw-url">Raw</a>
											<a href="/douglascrockford/JSON-js/blame/master/json2.js" class="minibutton js-update-url-with-hash">Blame</a>
											<a href="/douglascrockford/JSON-js/commits/master/json2.js" class="minibutton " rel="nofollow">History</a>
											</div><!-- /.button-group -->


											<a class="octicon-button disabled tooltipped tooltipped-w" href="#"
											aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

											<a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
												aria-label="You must be signed in to make or propose changes">
											<span class="octicon octicon-trashcan"></span>
											</a>
											</div><!-- /.actions -->
											</div>

											<div class="blob-wrapper data type-javascript">

											<table class="highlight tab-size-8 js-file-line-container">
											<tr>
											<td id="L1" class="blob-line-num js-line-number" data-line-number="1"></td>
											<td id="LC1" class="blob-line-code js-file-line"><span class="cm">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-line-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-line-code js-file-line"><span class="cm">    json2.js</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-line-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-line-code js-file-line"><span class="cm">    2014-02-04</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-line-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-line-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-line-code js-file-line"><span class="cm">    Public Domain.</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-line-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-line-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-line-code js-file-line"><span class="cm">    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-line-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-line-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-line-code js-file-line"><span class="cm">    See http://www.JSON.org/js.html</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-line-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-line-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-line-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-line-code js-file-line"><span class="cm">    This code should be minified before deployment.</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-line-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-line-code js-file-line"><span class="cm">    See http://javascript.crockford.com/jsmin.html</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-line-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-line-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-line-code js-file-line"><span class="cm">    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-line-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-line-code js-file-line"><span class="cm">    NOT CONTROL.</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-line-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-line-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-line-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-line-code js-file-line"><span class="cm">    This file creates a global JSON object containing two methods: stringify</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-line-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-line-code js-file-line"><span class="cm">    and parse.</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-line-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-line-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-line-code js-file-line"><span class="cm">        JSON.stringify(value, replacer, space)</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-line-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-line-code js-file-line"><span class="cm">            value       any JavaScript value, usually an object or array.</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-line-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L25" class="blob-line-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-line-code js-file-line"><span class="cm">            replacer    an optional parameter that determines how object</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-line-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-line-code js-file-line"><span class="cm">                        values are stringified for objects. It can be a</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-line-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-line-code js-file-line"><span class="cm">                        function or an array of strings.</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-line-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-line-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-line-code js-file-line"><span class="cm">            space       an optional parameter that specifies the indentation</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-line-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-line-code js-file-line"><span class="cm">                        of nested structures. If it is omitted, the text will</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-line-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-line-code js-file-line"><span class="cm">                        be packed without extra whitespace. If it is a number,</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-line-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-line-code js-file-line"><span class="cm">                        it will specify the number of spaces to indent at each</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-line-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-line-code js-file-line"><span class="cm">                        level. If it is a string (such as &#39;\t&#39; or &#39;&amp;nbsp;&#39;),</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-line-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-line-code js-file-line"><span class="cm">                        it contains the characters used to indent at each level.</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-line-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L36" class="blob-line-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-line-code js-file-line"><span class="cm">            This method produces a JSON text from a JavaScript value.</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-line-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-line-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-line-code js-file-line"><span class="cm">            When an object value is found, if the object contains a toJSON</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-line-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-line-code js-file-line"><span class="cm">            method, its toJSON method will be called and the result will be</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-line-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-line-code js-file-line"><span class="cm">            stringified. A toJSON method does not serialize: it returns the</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-line-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-line-code js-file-line"><span class="cm">            value represented by the name/value pair that should be serialized,</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-line-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-line-code js-file-line"><span class="cm">            or undefined if nothing should be serialized. The toJSON method</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-line-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-line-code js-file-line"><span class="cm">            will be passed the key associated with the value, and this will be</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-line-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-line-code js-file-line"><span class="cm">            bound to the value</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-line-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-line-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-line-code js-file-line"><span class="cm">            For example, this would serialize Dates as ISO strings.</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-line-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L48" class="blob-line-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-line-code js-file-line"><span class="cm">                Date.prototype.toJSON = function (key) {</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-line-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-line-code js-file-line"><span class="cm">                    function f(n) {</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-line-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-line-code js-file-line"><span class="cm">                        // Format integers to have at least two digits.</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-line-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-line-code js-file-line"><span class="cm">                        return n &lt; 10 ? &#39;0&#39; + n : n;</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-line-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-line-code js-file-line"><span class="cm">                    }</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-line-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L54" class="blob-line-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-line-code js-file-line"><span class="cm">                    return this.getUTCFullYear()   + &#39;-&#39; +</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-line-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-line-code js-file-line"><span class="cm">                         f(this.getUTCMonth() + 1) + &#39;-&#39; +</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-line-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-line-code js-file-line"><span class="cm">                         f(this.getUTCDate())      + &#39;T&#39; +</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-line-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-line-code js-file-line"><span class="cm">                         f(this.getUTCHours())     + &#39;:&#39; +</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-line-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-line-code js-file-line"><span class="cm">                         f(this.getUTCMinutes())   + &#39;:&#39; +</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-line-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-line-code js-file-line"><span class="cm">                         f(this.getUTCSeconds())   + &#39;Z&#39;;</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-line-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-line-code js-file-line"><span class="cm">                };</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-line-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L62" class="blob-line-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-line-code js-file-line"><span class="cm">            You can provide an optional replacer method. It will be passed the</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-line-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-line-code js-file-line"><span class="cm">            key and value of each member, with this bound to the containing</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-line-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-line-code js-file-line"><span class="cm">            object. The value that is returned from your method will be</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-line-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-line-code js-file-line"><span class="cm">            serialized. If your method returns undefined, then the member will</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-line-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-line-code js-file-line"><span class="cm">            be excluded from the serialization.</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-line-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-line-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-line-code js-file-line"><span class="cm">            If the replacer parameter is an array of strings, then it will be</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-line-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-line-code js-file-line"><span class="cm">            used to select the members to be serialized. It filters the results</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-line-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-line-code js-file-line"><span class="cm">            such that only members with keys listed in the replacer array are</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-line-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-line-code js-file-line"><span class="cm">            stringified.</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-line-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L73" class="blob-line-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-line-code js-file-line"><span class="cm">            Values that do not have JSON representations, such as undefined or</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-line-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-line-code js-file-line"><span class="cm">            functions, will not be serialized. Such values in objects will be</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-line-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-line-code js-file-line"><span class="cm">            dropped; in arrays they will be replaced with null. You can use</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-line-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-line-code js-file-line"><span class="cm">            a replacer function to replace those with JSON values.</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-line-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-line-code js-file-line"><span class="cm">            JSON.stringify(undefined) returns undefined.</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-line-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L79" class="blob-line-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-line-code js-file-line"><span class="cm">            The optional space parameter produces a stringification of the</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-line-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-line-code js-file-line"><span class="cm">            value that is filled with line breaks and indentation to make it</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-line-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-line-code js-file-line"><span class="cm">            easier to read.</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-line-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L83" class="blob-line-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-line-code js-file-line"><span class="cm">            If the space parameter is a non-empty string, then that string will</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-line-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-line-code js-file-line"><span class="cm">            be used for indentation. If the space parameter is a number, then</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-line-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-line-code js-file-line"><span class="cm">            the indentation will be that many spaces.</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-line-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L87" class="blob-line-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-line-code js-file-line"><span class="cm">            Example:</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-line-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L89" class="blob-line-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-line-code js-file-line"><span class="cm">            text = JSON.stringify([&#39;e&#39;, {pluribus: &#39;unum&#39;}]);</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-line-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-line-code js-file-line"><span class="cm">            // text is &#39;[&quot;e&quot;,{&quot;pluribus&quot;:&quot;unum&quot;}]&#39;</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-line-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-line-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L93" class="blob-line-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-line-code js-file-line"><span class="cm">            text = JSON.stringify([&#39;e&#39;, {pluribus: &#39;unum&#39;}], null, &#39;\t&#39;);</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-line-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-line-code js-file-line"><span class="cm">            // text is &#39;[\n\t&quot;e&quot;,\n\t{\n\t\t&quot;pluribus&quot;: &quot;unum&quot;\n\t}\n]&#39;</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-line-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L96" class="blob-line-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-line-code js-file-line"><span class="cm">            text = JSON.stringify([new Date()], function (key, value) {</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-line-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-line-code js-file-line"><span class="cm">                return this[key] instanceof Date ?</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-line-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-line-code js-file-line"><span class="cm">                    &#39;Date(&#39; + this[key] + &#39;)&#39; : value;</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-line-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-line-code js-file-line"><span class="cm">            });</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-line-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-line-code js-file-line"><span class="cm">            // text is &#39;[&quot;Date(---current time---)&quot;]&#39;</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-line-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L102" class="blob-line-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L103" class="blob-line-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-line-code js-file-line"><span class="cm">        JSON.parse(text, reviver)</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-line-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-line-code js-file-line"><span class="cm">            This method parses a JSON text to produce an object or array.</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-line-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-line-code js-file-line"><span class="cm">            It can throw a SyntaxError exception.</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-line-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L107" class="blob-line-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-line-code js-file-line"><span class="cm">            The optional reviver parameter is a function that can filter and</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-line-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-line-code js-file-line"><span class="cm">            transform the results. It receives each of the keys and values,</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-line-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-line-code js-file-line"><span class="cm">            and its return value is used instead of the original value.</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-line-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-line-code js-file-line"><span class="cm">            If it returns what it received, then the structure is not modified.</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-line-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-line-code js-file-line"><span class="cm">            If it returns undefined then the member is deleted.</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-line-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L113" class="blob-line-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-line-code js-file-line"><span class="cm">            Example:</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-line-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L115" class="blob-line-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-line-code js-file-line"><span class="cm">            // Parse the text. Values that look like ISO date strings will</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-line-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-line-code js-file-line"><span class="cm">            // be converted to Date objects.</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-line-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L118" class="blob-line-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-line-code js-file-line"><span class="cm">            myData = JSON.parse(text, function (key, value) {</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-line-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-line-code js-file-line"><span class="cm">                var a;</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-line-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-line-code js-file-line"><span class="cm">                if (typeof value === &#39;string&#39;) {</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-line-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-line-code js-file-line"><span class="cm">                    a =</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-line-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-line-code js-file-line"><span class="cm">/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-line-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-line-code js-file-line"><span class="cm">                    if (a) {</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-line-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-line-code js-file-line"><span class="cm">                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-line-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-line-code js-file-line"><span class="cm">                            +a[5], +a[6]));</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-line-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-line-code js-file-line"><span class="cm">                    }</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-line-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-line-code js-file-line"><span class="cm">                }</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-line-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-line-code js-file-line"><span class="cm">                return value;</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-line-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-line-code js-file-line"><span class="cm">            });</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-line-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L131" class="blob-line-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-line-code js-file-line"><span class="cm">            myData = JSON.parse(&#39;[&quot;Date(09/09/2001)&quot;]&#39;, function (key, value) {</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-line-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-line-code js-file-line"><span class="cm">                var d;</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-line-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-line-code js-file-line"><span class="cm">                if (typeof value === &#39;string&#39; &amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-line-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-line-code js-file-line"><span class="cm">                        value.slice(0, 5) === &#39;Date(&#39; &amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-line-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-line-code js-file-line"><span class="cm">                        value.slice(-1) === &#39;)&#39;) {</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-line-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-line-code js-file-line"><span class="cm">                    d = new Date(value.slice(5, -1));</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-line-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-line-code js-file-line"><span class="cm">                    if (d) {</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-line-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-line-code js-file-line"><span class="cm">                        return d;</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-line-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-line-code js-file-line"><span class="cm">                    }</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-line-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-line-code js-file-line"><span class="cm">                }</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-line-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-line-code js-file-line"><span class="cm">                return value;</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-line-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-line-code js-file-line"><span class="cm">            });</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-line-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L144" class="blob-line-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L145" class="blob-line-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-line-code js-file-line"><span class="cm">    This is a reference implementation. You are free to copy, modify, or</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-line-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-line-code js-file-line"><span class="cm">    redistribute.</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-line-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-line-code js-file-line"><span class="cm">*/</span></td>
        </tr>
        <tr>
        <td id="L148" class="blob-line-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L149" class="blob-line-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-line-code js-file-line"><span class="cm">/*jslint evil: true, regexp: true */</span></td>
        </tr>
        <tr>
        <td id="L150" class="blob-line-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L151" class="blob-line-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-line-code js-file-line"><span class="cm">/*members &quot;&quot;, &quot;\b&quot;, &quot;\t&quot;, &quot;\n&quot;, &quot;\f&quot;, &quot;\r&quot;, &quot;\&quot;&quot;, JSON, &quot;\\&quot;, apply,</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-line-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-line-code js-file-line"><span class="cm">    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-line-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-line-code js-file-line"><span class="cm">    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-line-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-line-code js-file-line"><span class="cm">    lastIndex, length, parse, prototype, push, replace, slice, stringify,</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-line-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-line-code js-file-line"><span class="cm">    test, toJSON, toString, valueOf</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-line-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-line-code js-file-line"><span class="cm">*/</span></td>
        </tr>
        <tr>
        <td id="L157" class="blob-line-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L158" class="blob-line-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L159" class="blob-line-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-line-code js-file-line"><span class="c1">// Create a JSON object only if one does not already exist. We create the</span></td>
        </tr>
        <tr>
        <td id="L160" class="blob-line-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-line-code js-file-line"><span class="c1">// methods in a closure to avoid creating global variables.</span></td>
        </tr>
        <tr>
        <td id="L161" class="blob-line-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L162" class="blob-line-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-line-code js-file-line"><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">JSON</span> <span class="o">!==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L163" class="blob-line-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-line-code js-file-line">    <span class="nx">JSON</span> <span class="o">=</span> <span class="p">{};</span></td>
        </tr>
        <tr>
        <td id="L164" class="blob-line-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-line-code js-file-line"><span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L165" class="blob-line-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L166" class="blob-line-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-line-code js-file-line"><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L167" class="blob-line-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-line-code js-file-line">    <span class="s1">&#39;use strict&#39;</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L168" class="blob-line-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L169" class="blob-line-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-line-code js-file-line">    <span class="kd">function</span> <span class="nx">f</span><span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L170" class="blob-line-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-line-code js-file-line">        <span class="c1">// Format integers to have at least two digits.</span></td>
        </tr>
        <tr>
        <td id="L171" class="blob-line-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="mi">10</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">n</span> <span class="o">:</span> <span class="nx">n</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L172" class="blob-line-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-line-code js-file-line">    <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L173" class="blob-line-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L174" class="blob-line-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L175" class="blob-line-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L176" class="blob-line-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-line-code js-file-line">        <span class="nb">Date</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L177" class="blob-line-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L178" class="blob-line-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nb">isFinite</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">valueOf</span><span class="p">())</span></td>
        </tr>
        <tr>
        <td id="L179" class="blob-line-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-line-code js-file-line">                <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">getUTCFullYear</span><span class="p">()</span>     <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span></td>
        </tr>
        <tr>
        <td id="L180" class="blob-line-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-line-code js-file-line">                    <span class="nx">f</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getUTCMonth</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span></td>
        </tr>
        <tr>
        <td id="L181" class="blob-line-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-line-code js-file-line">                    <span class="nx">f</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getUTCDate</span><span class="p">())</span>      <span class="o">+</span> <span class="s1">&#39;T&#39;</span> <span class="o">+</span></td>
        </tr>
        <tr>
        <td id="L182" class="blob-line-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-line-code js-file-line">                    <span class="nx">f</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getUTCHours</span><span class="p">())</span>     <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span></td>
        </tr>
        <tr>
        <td id="L183" class="blob-line-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-line-code js-file-line">                    <span class="nx">f</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getUTCMinutes</span><span class="p">())</span>   <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span></td>
        </tr>
        <tr>
        <td id="L184" class="blob-line-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-line-code js-file-line">                    <span class="nx">f</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getUTCSeconds</span><span class="p">())</span>   <span class="o">+</span> <span class="s1">&#39;Z&#39;</span></td>
        </tr>
        <tr>
        <td id="L185" class="blob-line-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-line-code js-file-line">                <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L186" class="blob-line-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-line-code js-file-line">        <span class="p">};</span></td>
        </tr>
        <tr>
        <td id="L187" class="blob-line-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L188" class="blob-line-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-line-code js-file-line">        <span class="nb">String</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span>      <span class="o">=</span></td>
        </tr>
        <tr>
        <td id="L189" class="blob-line-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-line-code js-file-line">            <span class="nb">Number</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span>  <span class="o">=</span></td>
        </tr>
        <tr>
        <td id="L190" class="blob-line-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-line-code js-file-line">            <span class="nb">Boolean</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L191" class="blob-line-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-line-code js-file-line">                <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">valueOf</span><span class="p">();</span></td>
        </tr>
        <tr>
        <td id="L192" class="blob-line-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-line-code js-file-line">            <span class="p">};</span></td>
        </tr>
        <tr>
        <td id="L193" class="blob-line-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-line-code js-file-line">    <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L194" class="blob-line-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L195" class="blob-line-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">cx</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L196" class="blob-line-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-line-code js-file-line">        <span class="nx">escapable</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L197" class="blob-line-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-line-code js-file-line">        <span class="nx">gap</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L198" class="blob-line-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-line-code js-file-line">        <span class="nx">indent</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L199" class="blob-line-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-line-code js-file-line">        <span class="nx">meta</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L200" class="blob-line-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-line-code js-file-line">        <span class="nx">rep</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L201" class="blob-line-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L202" class="blob-line-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L203" class="blob-line-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-line-code js-file-line">    <span class="kd">function</span> <span class="nx">quote</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L204" class="blob-line-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L205" class="blob-line-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-line-code js-file-line"><span class="c1">// If the string contains no control characters, no quote characters, and no</span></td>
        </tr>
        <tr>
        <td id="L206" class="blob-line-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-line-code js-file-line"><span class="c1">// backslash characters, then we can safely slap some quotes around it.</span></td>
        </tr>
        <tr>
        <td id="L207" class="blob-line-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-line-code js-file-line"><span class="c1">// Otherwise we must also replace the offending characters with safe escape</span></td>
        </tr>
        <tr>
        <td id="L208" class="blob-line-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-line-code js-file-line"><span class="c1">// sequences.</span></td>
        </tr>
        <tr>
        <td id="L209" class="blob-line-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L210" class="blob-line-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-line-code js-file-line">        <span class="nx">escapable</span><span class="p">.</span><span class="nx">lastIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L211" class="blob-line-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">escapable</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span> <span class="nx">string</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">escapable</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L212" class="blob-line-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">meta</span><span class="p">[</span><span class="nx">a</span><span class="p">];</span></td>
        </tr>
        <tr>
        <td id="L213" class="blob-line-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="k">typeof</span> <span class="nx">c</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span></td>
        </tr>
        <tr>
        <td id="L214" class="blob-line-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-line-code js-file-line">                <span class="o">?</span> <span class="nx">c</span></td>
        </tr>
        <tr>
        <td id="L215" class="blob-line-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-line-code js-file-line">                <span class="o">:</span> <span class="s1">&#39;\\u&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="s1">&#39;0000&#39;</span> <span class="o">+</span> <span class="nx">a</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">)).</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">4</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L216" class="blob-line-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-line-code js-file-line">        <span class="p">})</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">:</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span> <span class="nx">string</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L217" class="blob-line-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-line-code js-file-line">    <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L218" class="blob-line-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L219" class="blob-line-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L220" class="blob-line-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-line-code js-file-line">    <span class="kd">function</span> <span class="nx">str</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">holder</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L221" class="blob-line-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L222" class="blob-line-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-line-code js-file-line"><span class="c1">// Produce a string from holder[key].</span></td>
        </tr>
        <tr>
        <td id="L223" class="blob-line-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L224" class="blob-line-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">i</span><span class="p">,</span>          <span class="c1">// The loop counter.</span></td>
        </tr>
        <tr>
        <td id="L225" class="blob-line-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-line-code js-file-line">            <span class="nx">k</span><span class="p">,</span>          <span class="c1">// The member key.</span></td>
        </tr>
        <tr>
        <td id="L226" class="blob-line-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-line-code js-file-line">            <span class="nx">v</span><span class="p">,</span>          <span class="c1">// The member value.</span></td>
        </tr>
        <tr>
        <td id="L227" class="blob-line-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-line-code js-file-line">            <span class="nx">length</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L228" class="blob-line-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-line-code js-file-line">            <span class="nx">mind</span> <span class="o">=</span> <span class="nx">gap</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L229" class="blob-line-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-line-code js-file-line">            <span class="nx">partial</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L230" class="blob-line-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-line-code js-file-line">            <span class="nx">value</span> <span class="o">=</span> <span class="nx">holder</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></td>
        </tr>
        <tr>
        <td id="L231" class="blob-line-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L232" class="blob-line-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-line-code js-file-line"><span class="c1">// If the value has a toJSON method, call it to obtain a replacement value.</span></td>
        </tr>
        <tr>
        <td id="L233" class="blob-line-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L234" class="blob-line-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span></td>
        </tr>
        <tr>
        <td id="L235" class="blob-line-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-line-code js-file-line">                <span class="k">typeof</span> <span class="nx">value</span><span class="p">.</span><span class="nx">toJSON</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L236" class="blob-line-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-line-code js-file-line">            <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">toJSON</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L237" class="blob-line-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-line-code js-file-line">        <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L238" class="blob-line-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L239" class="blob-line-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-line-code js-file-line"><span class="c1">// If we were called with a replacer function, then call the replacer to</span></td>
        </tr>
        <tr>
        <td id="L240" class="blob-line-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-line-code js-file-line"><span class="c1">// obtain a replacement value.</span></td>
        </tr>
        <tr>
        <td id="L241" class="blob-line-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L242" class="blob-line-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-line-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">rep</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L243" class="blob-line-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-line-code js-file-line">            <span class="nx">value</span> <span class="o">=</span> <span class="nx">rep</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">holder</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L244" class="blob-line-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-line-code js-file-line">        <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L245" class="blob-line-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L246" class="blob-line-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-line-code js-file-line"><span class="c1">// What happens next depends on the value&#39;s type.</span></td>
        </tr>
        <tr>
        <td id="L247" class="blob-line-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L248" class="blob-line-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-line-code js-file-line">        <span class="k">switch</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L249" class="blob-line-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-line-code js-file-line">        <span class="k">case</span> <span class="s1">&#39;string&#39;</span><span class="o">:</span></td>
        </tr>
        <tr>
        <td id="L250" class="blob-line-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">quote</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L251" class="blob-line-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L252" class="blob-line-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-line-code js-file-line">        <span class="k">case</span> <span class="s1">&#39;number&#39;</span><span class="o">:</span></td>
        </tr>
        <tr>
        <td id="L253" class="blob-line-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L254" class="blob-line-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-line-code js-file-line"><span class="c1">// JSON numbers must be finite. Encode non-finite numbers as null.</span></td>
        </tr>
        <tr>
        <td id="L255" class="blob-line-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L256" class="blob-line-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nb">isFinite</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">?</span> <span class="nb">String</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;null&#39;</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L257" class="blob-line-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L258" class="blob-line-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-line-code js-file-line">        <span class="k">case</span> <span class="s1">&#39;boolean&#39;</span><span class="o">:</span></td>
        </tr>
        <tr>
        <td id="L259" class="blob-line-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-line-code js-file-line">        <span class="k">case</span> <span class="s1">&#39;null&#39;</span><span class="o">:</span></td>
        </tr>
        <tr>
        <td id="L260" class="blob-line-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L261" class="blob-line-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-line-code js-file-line"><span class="c1">// If the value is a boolean or null, convert it to a string. Note:</span></td>
        </tr>
        <tr>
        <td id="L262" class="blob-line-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-line-code js-file-line"><span class="c1">// typeof null does not produce &#39;null&#39;. The case is included here in</span></td>
        </tr>
        <tr>
        <td id="L263" class="blob-line-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-line-code js-file-line"><span class="c1">// the remote chance that this gets fixed someday.</span></td>
        </tr>
        <tr>
        <td id="L264" class="blob-line-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L265" class="blob-line-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nb">String</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L266" class="blob-line-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L267" class="blob-line-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-line-code js-file-line"><span class="c1">// If the type is &#39;object&#39;, we might be dealing with an object or an array or</span></td>
        </tr>
        <tr>
        <td id="L268" class="blob-line-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-line-code js-file-line"><span class="c1">// null.</span></td>
        </tr>
        <tr>
        <td id="L269" class="blob-line-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L270" class="blob-line-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-line-code js-file-line">        <span class="k">case</span> <span class="s1">&#39;object&#39;</span><span class="o">:</span></td>
        </tr>
        <tr>
        <td id="L271" class="blob-line-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L272" class="blob-line-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-line-code js-file-line"><span class="c1">// Due to a specification blunder in ECMAScript, typeof null is &#39;object&#39;,</span></td>
        </tr>
        <tr>
        <td id="L273" class="blob-line-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-line-code js-file-line"><span class="c1">// so watch out for that case.</span></td>
        </tr>
        <tr>
        <td id="L274" class="blob-line-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L275" class="blob-line-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L276" class="blob-line-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-line-code js-file-line">                <span class="k">return</span> <span class="s1">&#39;null&#39;</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L277" class="blob-line-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-line-code js-file-line">            <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L278" class="blob-line-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L279" class="blob-line-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-line-code js-file-line"><span class="c1">// Make an array to hold the partial results of stringifying this object value.</span></td>
        </tr>
        <tr>
        <td id="L280" class="blob-line-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L281" class="blob-line-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-line-code js-file-line">            <span class="nx">gap</span> <span class="o">+=</span> <span class="nx">indent</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L282" class="blob-line-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-line-code js-file-line">            <span class="nx">partial</span> <span class="o">=</span> <span class="p">[];</span></td>
        </tr>
        <tr>
        <td id="L283" class="blob-line-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L284" class="blob-line-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-line-code js-file-line"><span class="c1">// Is the value an array?</span></td>
        </tr>
        <tr>
        <td id="L285" class="blob-line-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L286" class="blob-line-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L287" class="blob-line-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L288" class="blob-line-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-line-code js-file-line"><span class="c1">// The value is an array. Stringify every element. Use null as a placeholder</span></td>
        </tr>
        <tr>
        <td id="L289" class="blob-line-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-line-code js-file-line"><span class="c1">// for non-JSON values.</span></td>
        </tr>
        <tr>
        <td id="L290" class="blob-line-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L291" class="blob-line-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-line-code js-file-line">                <span class="nx">length</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L292" class="blob-line-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-line-code js-file-line">                <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L293" class="blob-line-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-line-code js-file-line">                    <span class="nx">partial</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">str</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;null&#39;</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L294" class="blob-line-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-line-code js-file-line">                <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L295" class="blob-line-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L296" class="blob-line-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-line-code js-file-line"><span class="c1">// Join all of the elements together, separated with commas, and wrap them in</span></td>
        </tr>
        <tr>
        <td id="L297" class="blob-line-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-line-code js-file-line"><span class="c1">// brackets.</span></td>
        </tr>
        <tr>
        <td id="L298" class="blob-line-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L299" class="blob-line-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-line-code js-file-line">                <span class="nx">v</span> <span class="o">=</span> <span class="nx">partial</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span></td>
        </tr>
        <tr>
        <td id="L300" class="blob-line-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-line-code js-file-line">                    <span class="o">?</span> <span class="s1">&#39;[]&#39;</span></td>
        </tr>
        <tr>
        <td id="L301" class="blob-line-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-line-code js-file-line">                    <span class="o">:</span> <span class="nx">gap</span></td>
        </tr>
        <tr>
        <td id="L302" class="blob-line-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-line-code js-file-line">                    <span class="o">?</span> <span class="s1">&#39;[\n&#39;</span> <span class="o">+</span> <span class="nx">gap</span> <span class="o">+</span> <span class="nx">partial</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,\n&#39;</span> <span class="o">+</span> <span class="nx">gap</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\n&#39;</span> <span class="o">+</span> <span class="nx">mind</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span></td>
        </tr>
        <tr>
        <td id="L303" class="blob-line-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-line-code js-file-line">                    <span class="o">:</span> <span class="s1">&#39;[&#39;</span> <span class="o">+</span> <span class="nx">partial</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L304" class="blob-line-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-line-code js-file-line">                <span class="nx">gap</span> <span class="o">=</span> <span class="nx">mind</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L305" class="blob-line-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-line-code js-file-line">                <span class="k">return</span> <span class="nx">v</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L306" class="blob-line-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-line-code js-file-line">            <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L307" class="blob-line-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L308" class="blob-line-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-line-code js-file-line"><span class="c1">// If the replacer is an array, use it to select the members to be stringified.</span></td>
        </tr>
        <tr>
        <td id="L309" class="blob-line-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L310" class="blob-line-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">rep</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">rep</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L311" class="blob-line-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-line-code js-file-line">                <span class="nx">length</span> <span class="o">=</span> <span class="nx">rep</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L312" class="blob-line-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-line-code js-file-line">                <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L313" class="blob-line-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-line-code js-file-line">                    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">rep</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L314" class="blob-line-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-line-code js-file-line">                        <span class="nx">k</span> <span class="o">=</span> <span class="nx">rep</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
        </tr>
        <tr>
        <td id="L315" class="blob-line-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-line-code js-file-line">                        <span class="nx">v</span> <span class="o">=</span> <span class="nx">str</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L316" class="blob-line-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-line-code js-file-line">                        <span class="k">if</span> <span class="p">(</span><span class="nx">v</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L317" class="blob-line-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-line-code js-file-line">                            <span class="nx">partial</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">quote</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">gap</span> <span class="o">?</span> <span class="s1">&#39;: &#39;</span> <span class="o">:</span> <span class="s1">&#39;:&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">v</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L318" class="blob-line-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-line-code js-file-line">                        <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L319" class="blob-line-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-line-code js-file-line">                    <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L320" class="blob-line-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-line-code js-file-line">                <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L321" class="blob-line-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L322" class="blob-line-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L323" class="blob-line-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-line-code js-file-line"><span class="c1">// Otherwise, iterate through all of the keys in the object.</span></td>
        </tr>
        <tr>
        <td id="L324" class="blob-line-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L325" class="blob-line-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-line-code js-file-line">                <span class="k">for</span> <span class="p">(</span><span class="nx">k</span> <span class="k">in</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L326" class="blob-line-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-line-code js-file-line">                    <span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">k</span><span class="p">))</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L327" class="blob-line-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-line-code js-file-line">                        <span class="nx">v</span> <span class="o">=</span> <span class="nx">str</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L328" class="blob-line-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-line-code js-file-line">                        <span class="k">if</span> <span class="p">(</span><span class="nx">v</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L329" class="blob-line-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-line-code js-file-line">                            <span class="nx">partial</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">quote</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">gap</span> <span class="o">?</span> <span class="s1">&#39;: &#39;</span> <span class="o">:</span> <span class="s1">&#39;:&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">v</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L330" class="blob-line-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-line-code js-file-line">                        <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L331" class="blob-line-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-line-code js-file-line">                    <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L332" class="blob-line-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-line-code js-file-line">                <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L333" class="blob-line-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-line-code js-file-line">            <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L334" class="blob-line-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L335" class="blob-line-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-line-code js-file-line"><span class="c1">// Join all of the member texts together, separated with commas,</span></td>
        </tr>
        <tr>
        <td id="L336" class="blob-line-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-line-code js-file-line"><span class="c1">// and wrap them in braces.</span></td>
        </tr>
        <tr>
        <td id="L337" class="blob-line-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L338" class="blob-line-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-line-code js-file-line">            <span class="nx">v</span> <span class="o">=</span> <span class="nx">partial</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span></td>
        </tr>
        <tr>
        <td id="L339" class="blob-line-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-line-code js-file-line">                <span class="o">?</span> <span class="s1">&#39;{}&#39;</span></td>
        </tr>
        <tr>
        <td id="L340" class="blob-line-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-line-code js-file-line">                <span class="o">:</span> <span class="nx">gap</span></td>
        </tr>
        <tr>
        <td id="L341" class="blob-line-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-line-code js-file-line">                <span class="o">?</span> <span class="s1">&#39;{\n&#39;</span> <span class="o">+</span> <span class="nx">gap</span> <span class="o">+</span> <span class="nx">partial</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,\n&#39;</span> <span class="o">+</span> <span class="nx">gap</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\n&#39;</span> <span class="o">+</span> <span class="nx">mind</span> <span class="o">+</span> <span class="s1">&#39;}&#39;</span></td>
        </tr>
        <tr>
        <td id="L342" class="blob-line-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-line-code js-file-line">                <span class="o">:</span> <span class="s1">&#39;{&#39;</span> <span class="o">+</span> <span class="nx">partial</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;}&#39;</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L343" class="blob-line-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-line-code js-file-line">            <span class="nx">gap</span> <span class="o">=</span> <span class="nx">mind</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L344" class="blob-line-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">v</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L345" class="blob-line-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-line-code js-file-line">        <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L346" class="blob-line-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-line-code js-file-line">    <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L347" class="blob-line-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L348" class="blob-line-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-line-code js-file-line"><span class="c1">// If the JSON object does not yet have a stringify method, give it one.</span></td>
        </tr>
        <tr>
        <td id="L349" class="blob-line-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L350" class="blob-line-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L351" class="blob-line-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-line-code js-file-line">        <span class="nx">escapable</span> <span class="o">=</span> <span class="sr">/[\\\&quot;\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L352" class="blob-line-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-line-code js-file-line">        <span class="nx">meta</span> <span class="o">=</span> <span class="p">{</span>    <span class="c1">// table of character substitutions</span></td>
        </tr>
        <tr>
        <td id="L353" class="blob-line-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-line-code js-file-line">            <span class="s1">&#39;\b&#39;</span><span class="o">:</span> <span class="s1">&#39;\\b&#39;</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L354" class="blob-line-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-line-code js-file-line">            <span class="s1">&#39;\t&#39;</span><span class="o">:</span> <span class="s1">&#39;\\t&#39;</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L355" class="blob-line-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-line-code js-file-line">            <span class="s1">&#39;\n&#39;</span><span class="o">:</span> <span class="s1">&#39;\\n&#39;</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L356" class="blob-line-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-line-code js-file-line">            <span class="s1">&#39;\f&#39;</span><span class="o">:</span> <span class="s1">&#39;\\f&#39;</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L357" class="blob-line-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-line-code js-file-line">            <span class="s1">&#39;\r&#39;</span><span class="o">:</span> <span class="s1">&#39;\\r&#39;</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L358" class="blob-line-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-line-code js-file-line">            <span class="s1">&#39;&quot;&#39;</span> <span class="o">:</span> <span class="s1">&#39;\\&quot;&#39;</span><span class="p">,</span></td>
        </tr>
        <tr>
        <td id="L359" class="blob-line-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-line-code js-file-line">            <span class="s1">&#39;\\&#39;</span><span class="o">:</span> <span class="s1">&#39;\\\\&#39;</span></td>
        </tr>
        <tr>
        <td id="L360" class="blob-line-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-line-code js-file-line">        <span class="p">};</span></td>
        </tr>
        <tr>
        <td id="L361" class="blob-line-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-line-code js-file-line">        <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">replacer</span><span class="p">,</span> <span class="nx">space</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L362" class="blob-line-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L363" class="blob-line-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-line-code js-file-line"><span class="c1">// The stringify method takes a value and an optional replacer, and an optional</span></td>
        </tr>
        <tr>
        <td id="L364" class="blob-line-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-line-code js-file-line"><span class="c1">// space parameter, and returns a JSON text. The replacer can be a function</span></td>
        </tr>
        <tr>
        <td id="L365" class="blob-line-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-line-code js-file-line"><span class="c1">// that can replace values, or an array of strings that will select the keys.</span></td>
        </tr>
        <tr>
        <td id="L366" class="blob-line-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-line-code js-file-line"><span class="c1">// A default replacer method can be provided. Use of the space parameter can</span></td>
        </tr>
        <tr>
        <td id="L367" class="blob-line-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-line-code js-file-line"><span class="c1">// produce text that is more easily readable.</span></td>
        </tr>
        <tr>
        <td id="L368" class="blob-line-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L369" class="blob-line-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">i</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L370" class="blob-line-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-line-code js-file-line">            <span class="nx">gap</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L371" class="blob-line-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-line-code js-file-line">            <span class="nx">indent</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L372" class="blob-line-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L373" class="blob-line-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-line-code js-file-line"><span class="c1">// If the space parameter is a number, make an indent string containing that</span></td>
        </tr>
        <tr>
        <td id="L374" class="blob-line-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-line-code js-file-line"><span class="c1">// many spaces.</span></td>
        </tr>
        <tr>
        <td id="L375" class="blob-line-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L376" class="blob-line-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">space</span> <span class="o">===</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L377" class="blob-line-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-line-code js-file-line">                <span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">space</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L378" class="blob-line-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-line-code js-file-line">                    <span class="nx">indent</span> <span class="o">+=</span> <span class="s1">&#39; &#39;</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L379" class="blob-line-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-line-code js-file-line">                <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L380" class="blob-line-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L381" class="blob-line-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-line-code js-file-line"><span class="c1">// If the space parameter is a string, it will be used as the indent string.</span></td>
        </tr>
        <tr>
        <td id="L382" class="blob-line-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L383" class="blob-line-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">space</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L384" class="blob-line-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-line-code js-file-line">                <span class="nx">indent</span> <span class="o">=</span> <span class="nx">space</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L385" class="blob-line-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-line-code js-file-line">            <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L386" class="blob-line-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L387" class="blob-line-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-line-code js-file-line"><span class="c1">// If there is a replacer, it must be a function or an array.</span></td>
        </tr>
        <tr>
        <td id="L388" class="blob-line-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-line-code js-file-line"><span class="c1">// Otherwise, throw an error.</span></td>
        </tr>
        <tr>
        <td id="L389" class="blob-line-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L390" class="blob-line-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-line-code js-file-line">            <span class="nx">rep</span> <span class="o">=</span> <span class="nx">replacer</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L391" class="blob-line-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">replacer</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">replacer</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span></td>
        </tr>
        <tr>
        <td id="L392" class="blob-line-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-line-code js-file-line">                    <span class="p">(</span><span class="k">typeof</span> <span class="nx">replacer</span> <span class="o">!==</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span></td>
        </tr>
        <tr>
        <td id="L393" class="blob-line-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-line-code js-file-line">                    <span class="k">typeof</span> <span class="nx">replacer</span><span class="p">.</span><span class="nx">length</span> <span class="o">!==</span> <span class="s1">&#39;number&#39;</span><span class="p">))</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L394" class="blob-line-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-line-code js-file-line">                <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;JSON.stringify&#39;</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L395" class="blob-line-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-line-code js-file-line">            <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L396" class="blob-line-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L397" class="blob-line-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-line-code js-file-line"><span class="c1">// Make a fake root object containing our value under the key of &#39;&#39;.</span></td>
        </tr>
        <tr>
        <td id="L398" class="blob-line-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-line-code js-file-line"><span class="c1">// Return the result of stringifying the value.</span></td>
        </tr>
        <tr>
        <td id="L399" class="blob-line-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L400" class="blob-line-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">str</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;&#39;</span><span class="o">:</span> <span class="nx">value</span><span class="p">});</span></td>
        </tr>
        <tr>
        <td id="L401" class="blob-line-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-line-code js-file-line">        <span class="p">};</span></td>
        </tr>
        <tr>
        <td id="L402" class="blob-line-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-line-code js-file-line">    <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L403" class="blob-line-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L404" class="blob-line-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L405" class="blob-line-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-line-code js-file-line"><span class="c1">// If the JSON object does not yet have a parse method, give it one.</span></td>
        </tr>
        <tr>
        <td id="L406" class="blob-line-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L407" class="blob-line-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L408" class="blob-line-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-line-code js-file-line">        <span class="nx">cx</span> <span class="o">=</span> <span class="sr">/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L409" class="blob-line-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-line-code js-file-line">        <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">reviver</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L410" class="blob-line-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L411" class="blob-line-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-line-code js-file-line"><span class="c1">// The parse method takes a text and an optional reviver function, and returns</span></td>
        </tr>
        <tr>
        <td id="L412" class="blob-line-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-line-code js-file-line"><span class="c1">// a JavaScript value if the text is a valid JSON text.</span></td>
        </tr>
        <tr>
        <td id="L413" class="blob-line-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L414" class="blob-line-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">j</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L415" class="blob-line-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L416" class="blob-line-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-line-code js-file-line">            <span class="kd">function</span> <span class="nx">walk</span><span class="p">(</span><span class="nx">holder</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L417" class="blob-line-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L418" class="blob-line-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-line-code js-file-line"><span class="c1">// The walk method is used to recursively walk the resulting structure so</span></td>
        </tr>
        <tr>
        <td id="L419" class="blob-line-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-line-code js-file-line"><span class="c1">// that modifications can be made.</span></td>
        </tr>
        <tr>
        <td id="L420" class="blob-line-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L421" class="blob-line-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-line-code js-file-line">                <span class="kd">var</span> <span class="nx">k</span><span class="p">,</span> <span class="nx">v</span><span class="p">,</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">holder</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></td>
        </tr>
        <tr>
        <td id="L422" class="blob-line-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L423" class="blob-line-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-line-code js-file-line">                    <span class="k">for</span> <span class="p">(</span><span class="nx">k</span> <span class="k">in</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L424" class="blob-line-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-line-code js-file-line">                        <span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">k</span><span class="p">))</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L425" class="blob-line-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-line-code js-file-line">                            <span class="nx">v</span> <span class="o">=</span> <span class="nx">walk</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">k</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L426" class="blob-line-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-line-code js-file-line">                            <span class="k">if</span> <span class="p">(</span><span class="nx">v</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L427" class="blob-line-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-line-code js-file-line">                                <span class="nx">value</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">=</span> <span class="nx">v</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L428" class="blob-line-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-line-code js-file-line">                            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L429" class="blob-line-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-line-code js-file-line">                                <span class="k">delete</span> <span class="nx">value</span><span class="p">[</span><span class="nx">k</span><span class="p">];</span></td>
        </tr>
        <tr>
        <td id="L430" class="blob-line-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-line-code js-file-line">                            <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L431" class="blob-line-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-line-code js-file-line">                        <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L432" class="blob-line-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-line-code js-file-line">                    <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L433" class="blob-line-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-line-code js-file-line">                <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L434" class="blob-line-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-line-code js-file-line">                <span class="k">return</span> <span class="nx">reviver</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">holder</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L435" class="blob-line-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-line-code js-file-line">            <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L436" class="blob-line-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L437" class="blob-line-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L438" class="blob-line-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-line-code js-file-line"><span class="c1">// Parsing happens in four stages. In the first stage, we replace certain</span></td>
        </tr>
        <tr>
        <td id="L439" class="blob-line-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-line-code js-file-line"><span class="c1">// Unicode characters with escape sequences. JavaScript handles many characters</span></td>
        </tr>
        <tr>
        <td id="L440" class="blob-line-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-line-code js-file-line"><span class="c1">// incorrectly, either silently deleting them, or treating them as line endings.</span></td>
        </tr>
        <tr>
        <td id="L441" class="blob-line-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L442" class="blob-line-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-line-code js-file-line">            <span class="nx">text</span> <span class="o">=</span> <span class="nb">String</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L443" class="blob-line-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-line-code js-file-line">            <span class="nx">cx</span><span class="p">.</span><span class="nx">lastIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L444" class="blob-line-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">cx</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">text</span><span class="p">))</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L445" class="blob-line-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-line-code js-file-line">                <span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">cx</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L446" class="blob-line-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-line-code js-file-line">                    <span class="k">return</span> <span class="s1">&#39;\\u&#39;</span> <span class="o">+</span></td>
        </tr>
        <tr>
        <td id="L447" class="blob-line-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-line-code js-file-line">                        <span class="p">(</span><span class="s1">&#39;0000&#39;</span> <span class="o">+</span> <span class="nx">a</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">)).</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">4</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L448" class="blob-line-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-line-code js-file-line">                <span class="p">});</span></td>
        </tr>
        <tr>
        <td id="L449" class="blob-line-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-line-code js-file-line">            <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L450" class="blob-line-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L451" class="blob-line-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-line-code js-file-line"><span class="c1">// In the second stage, we run the text against regular expressions that look</span></td>
        </tr>
        <tr>
        <td id="L452" class="blob-line-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-line-code js-file-line"><span class="c1">// for non-JSON patterns. We are especially concerned with &#39;()&#39; and &#39;new&#39;</span></td>
        </tr>
        <tr>
        <td id="L453" class="blob-line-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-line-code js-file-line"><span class="c1">// because they can cause invocation, and &#39;=&#39; because it can cause mutation.</span></td>
        </tr>
        <tr>
        <td id="L454" class="blob-line-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-line-code js-file-line"><span class="c1">// But just to be safe, we want to reject all unexpected forms.</span></td>
        </tr>
        <tr>
        <td id="L455" class="blob-line-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L456" class="blob-line-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-line-code js-file-line"><span class="c1">// We split the second stage into 4 regexp operations in order to work around</span></td>
        </tr>
        <tr>
        <td id="L457" class="blob-line-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-line-code js-file-line"><span class="c1">// crippling inefficiencies in IE&#39;s and Safari&#39;s regexp engines. First we</span></td>
        </tr>
        <tr>
        <td id="L458" class="blob-line-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-line-code js-file-line"><span class="c1">// replace the JSON backslash pairs with &#39;@&#39; (a non-JSON character). Second, we</span></td>
        </tr>
        <tr>
        <td id="L459" class="blob-line-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-line-code js-file-line"><span class="c1">// replace all simple value tokens with &#39;]&#39; characters. Third, we delete all</span></td>
        </tr>
        <tr>
        <td id="L460" class="blob-line-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-line-code js-file-line"><span class="c1">// open brackets that follow a colon or comma or that begin the text. Finally,</span></td>
        </tr>
        <tr>
        <td id="L461" class="blob-line-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-line-code js-file-line"><span class="c1">// we look to see that the remaining characters are only whitespace or &#39;]&#39; or</span></td>
        </tr>
        <tr>
        <td id="L462" class="blob-line-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-line-code js-file-line"><span class="c1">// &#39;,&#39; or &#39;:&#39; or &#39;{&#39; or &#39;}&#39;. If that is so, then the text is safe for eval.</span></td>
        </tr>
        <tr>
        <td id="L463" class="blob-line-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L464" class="blob-line-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="sr">/^[\],:{}\s]*$/</span></td>
        </tr>
        <tr>
        <td id="L465" class="blob-line-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-line-code js-file-line">                    <span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\(?:[&quot;\\\/bfnrt]|u[0-9a-fA-F]{4})/g</span><span class="p">,</span> <span class="s1">&#39;@&#39;</span><span class="p">)</span></td>
        </tr>
        <tr>
        <td id="L466" class="blob-line-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-line-code js-file-line">                        <span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;[^&quot;\\\n\r]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g</span><span class="p">,</span> <span class="s1">&#39;]&#39;</span><span class="p">)</span></td>
        </tr>
        <tr>
        <td id="L467" class="blob-line-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-line-code js-file-line">                        <span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?:^|:|,)(?:\s*\[)+/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)))</span> <span class="p">{</span></td>
        </tr>
        <tr>
        <td id="L468" class="blob-line-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L469" class="blob-line-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-line-code js-file-line"><span class="c1">// In the third stage we use the eval function to compile the text into a</span></td>
        </tr>
        <tr>
        <td id="L470" class="blob-line-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-line-code js-file-line"><span class="c1">// JavaScript structure. The &#39;{&#39; operator is subject to a syntactic ambiguity</span></td>
        </tr>
        <tr>
        <td id="L471" class="blob-line-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-line-code js-file-line"><span class="c1">// in JavaScript: it can begin a block or an object literal. We wrap the text</span></td>
        </tr>
        <tr>
        <td id="L472" class="blob-line-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-line-code js-file-line"><span class="c1">// in parens to eliminate the ambiguity.</span></td>
        </tr>
        <tr>
        <td id="L473" class="blob-line-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L474" class="blob-line-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-line-code js-file-line">                <span class="nx">j</span> <span class="o">=</span> <span class="nb">eval</span><span class="p">(</span><span class="s1">&#39;(&#39;</span> <span class="o">+</span> <span class="nx">text</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L475" class="blob-line-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L476" class="blob-line-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-line-code js-file-line"><span class="c1">// In the optional fourth stage, we recursively walk the new structure, passing</span></td>
        </tr>
        <tr>
        <td id="L477" class="blob-line-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-line-code js-file-line"><span class="c1">// each name/value pair to a reviver function for possible transformation.</span></td>
        </tr>
        <tr>
        <td id="L478" class="blob-line-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L479" class="blob-line-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-line-code js-file-line">                <span class="k">return</span> <span class="k">typeof</span> <span class="nx">reviver</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span></td>
        </tr>
        <tr>
        <td id="L480" class="blob-line-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-line-code js-file-line">                    <span class="o">?</span> <span class="nx">walk</span><span class="p">({</span><span class="s1">&#39;&#39;</span><span class="o">:</span> <span class="nx">j</span><span class="p">},</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></td>
        </tr>
        <tr>
        <td id="L481" class="blob-line-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-line-code js-file-line">                    <span class="o">:</span> <span class="nx">j</span><span class="p">;</span></td>
        </tr>
        <tr>
        <td id="L482" class="blob-line-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-line-code js-file-line">            <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L483" class="blob-line-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L484" class="blob-line-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-line-code js-file-line"><span class="c1">// If the text is not JSON parseable, then a SyntaxError is thrown.</span></td>
        </tr>
        <tr>
        <td id="L485" class="blob-line-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-line-code js-file-line">
        </td>
        </tr>
        <tr>
        <td id="L486" class="blob-line-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-line-code js-file-line">            <span class="k">throw</span> <span class="k">new</span> <span class="nx">SyntaxError</span><span class="p">(</span><span class="s1">&#39;JSON.parse&#39;</span><span class="p">);</span></td>
        </tr>
        <tr>
        <td id="L487" class="blob-line-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-line-code js-file-line">        <span class="p">};</span></td>
        </tr>
        <tr>
        <td id="L488" class="blob-line-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-line-code js-file-line">    <span class="p">}</span></td>
        </tr>
        <tr>
        <td id="L489" class="blob-line-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-line-code js-file-line"><span class="p">}());</span></td>
        </tr>
        </table>

        </div>

        </div>
        </div>

        <a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
        <form accept-charset="UTF-8" class="js-jump-to-line-form">
        <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
        <button type="submit" class="button">Go</button>
        </form>
        </div>

        </div>

        </div><!-- /.repo-container -->
        <div class="modal-backdrop"></div>
        </div><!-- /.container -->
        </div><!-- /.site -->


        </div><!-- /.wrapper -->

        <div class="container">
        <div class="site-footer">
        <ul class="site-footer-links right">
        <li><a href="https://status.github.com/">Status</a></li>
        <li><a href="http://developer.github.com">API</a></li>
        <li><a href="http://training.github.com">Training</a></li>
        <li><a href="http://shop.github.com">Shop</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About</a></li>

        </ul>

        <a href="/" aria-label="Homepage">
        <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
        </a>

        <ul class="site-footer-links">
        <li>&copy; 2014 <span title="0.06507s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
        </ul>
        </div><!-- /.site-footer -->
        </div><!-- /.container -->


        <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
        <div class="fullscreen-container js-suggester-container">
        <div class="textarea-wrap">
        <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
        </div>
        </div>
        <div class="fullscreen-sidebar">
        <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
        <span class="mega-octicon octicon-screen-normal"></span>
        </a>
        <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
        	aria-label="Switch themes">
        <span class="octicon octicon-color-mode"></span>
        </a>
        </div>
        </div>



        <div id="ajax-error-message" class="flash flash-error">
        <span class="octicon octicon-alert"></span>
        <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
        Something went wrong with that request. Please try again.
        </div>


        <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2b4202fc62ef88e1a007a9ed05df10607b189f42.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-1bf4ba2cf32b38523c4ec10ea568b6796e345c47.js" type="text/javascript"></script>


        <script async src="https://www.google-analytics.com/analytics.js"></script>
        </body>
        </html>

