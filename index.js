const map = {
  "application/actionscript": "actionscript",
  "application/gml+xml": "gml",
  "application/java-archive": "java",
  "application/java-vm": "java",
  "application/javascript": "javascript",
  "application/json": "json",
  "application/mathematica": "mathematica",
  "application/vnd.commonspace": "csp",
  "application/vnd.dart": "dart",
  "application/vnd.ms-excel": "excel",
  "application/x-perl": "perl",
  "application/x-httpd-php": "php",
  "application/x-sql": "sql",
  "application/x-tcl": "tcl",
  "application/x-tex": "tex",
  "text/markdown": "markdown",
  "text/less": "less",
  "text/coffeescript": "coffeescript",
  "text/css": "css",
  "text/stylus": "stylus",
  "text/xml": "xml",
  "text/x-c": "cpp",
  "text/x-fortran": "fortran",
  "text/x-handlebars-template": "handlebars",
  "text/x-java-source": "java",
  "text/x-lua": "lua",
  "text/x-markdown": "markdown",
  "text/x-processing": "processing",
  "text/x-scss": "scss",
  "text/yaml": "yaml",
}

function getLanguageName(contentType) {
  return map[contentType]
}

getLanguageName.map = map

module.exports = getLanguageName
