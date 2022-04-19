# perspectives-arc Highlightjs

This is the README for the contributed (3rd party) language definition "perspectives-arc" for [highlightjs](https://github.com/highlightjs/highlight.js). This module makes it possible to highlight Perspectives ARC code in your html pages.

## Getting it

Go to the [latest release](https://github.com/joopringelberg/perspectives-highlightjs.git/releases) (on Github: Code tab, section releases on the right, click `latest`). 

## Installing it

## Uninstalling it


## Example files

## Release Notes

### 0.0.0
Initial release.

## Requirements

## Extension Settings

This language extension as no specific settings.

## Known Issues

There are currently no known issues.

# Syntax coloring for Perspectives
We have syntax coloring for vscode and for Atom. Both use the TextMate approach to colorize source files. The TextMate approach is based on rules that are a combination of named regular expressions to select a part of the source text (the `scope`) and a string that identifies a particular style to format it. We follow a scope naming regime that makes [Base16](http://chriskempson.com/projects/base16/) themes applicable.

Highlightjs uses a different meta-format to specify a tokenizer. We try to implement a tokenization and scope naming regime that corresponds to the TextMate based approach. See the repository [language-perspectives-arcII](https://github.com/joopringelberg/language-perspectives-arcII.git) for an explanation of Base16 and TextMate rules.


## The Highlightjs-base16 mapping
AANPASSEN!!

The table below has been derived from the template file [default.moustache](https://github.com/chriskempson/base16-textmate/blob/master/templates/default.mustache) in the Base16 repository on Github.

|Base16 color variable|Textmate name|Textmate scope names|
|---|---|---|
|base02|Separator|meta-separator|
|base03|Comments|comment, punctuation.definition.comment|
||Unimplemented|invalid.unimplemented||
|base04|selectionForeground| `a gutterSettings key`|
|base05|Text|variable.parameter.function
||Punctuation|punctuation.definition.string, punctuation.definition.variable, punctuation.definition.string, punctuation.definition.parameters, punctuation.definition.string, punctuation.definition.array|
||Delimiters||
||Operators|keyword.operator|
||Separator|meta.separator|
|base06|||
|base07|Classes|meta.class|
||Illegal|invalid.illegal (`foreground`)|
||Depracated|invalid.deprecated (`foreground`)|
||Unimplemented|invalid.unimplemented|
|base08|Illegal|invalid.illegal (`background`)|
||Variables|variable|
||Tags|entity.name.tag|
||Link text|string.other.link, punctuation.definition.string.end.markdown, punctuation.definition.string.begin.markdown|
||Lists|markup.list|
||Deleted|markup.deleted|
||Illegal|invalid.illegal (`background`)|
|base09|Integers|constant.numeric|
||Floats||
||Boolean||
||Constants|constant|
||Attributes|entity.other.attribute-name|
||Values||
||Units|keyword.other.unit|
||Link url|meta.link|
||Quotes|markup.quote|
||Broken|invalid.broken|
|base0A|Bold|markup.bold, punctuation.definition.bold|
||Classes|support.class, entity.name.class, entity.name.type.class|
|base0B|Strings, Inherited Class|string, constant.other.symbol, entity.other.inherited-class|
||Code|markup.raw.inline|
||Inserted|markup.inserted|
|base0C|Support|support.function|
||Colors|constant.other.color|
||Regular expressions|string.regexp|
||Escape charactes|constant.character.escape|
|base0D|Headings|markup.heading punctuation.definition.heading, entity.name.section|
||Methods|keyword.other.special-method|
||Attribute Ids|entity.other.attribute-name.id, punctuation.definition.entity|
||Headings|markup.heading punctuation.definition.heading, entity.name.section|
|base0E|Keywords|keyword|
||Storage|storage|
||Selector|meta.selector|
||Italic|markup.italic, punctuation.definition.italic|
||Changed|markup.changed|
||Embedded|punctuation.section.embedded, variable.interpolation|
|base0F|Labels|entity.name.label|
||Deprecated|invalid.deprecated (`background`)|

## ARC categories
The table below gives a grouping of ARC keywords. The TOKENIZER RULE defines semantically appropriate groups of keywords as they are lumped together by our tokenizer for ARC. These are lumped together in even larger groups (under COLOR GROUP), where a Base64 color is assigned to each COLOR GROUP. In other words, the table gives the mapping from tokenizer rules to Base16 colors.

|COLOR GROUP|TOKENIZER RULE|ARC KEYWORDS|BASE64|
|---|---|---|---|
|Contexts|Context kinds|domain, case, party, activity|base0A|
|Roles|Role kinds|external, thing, context|base0B|
|||extern ||
|||View||
|||filledBy||
|User role|User role|user|base03|
|Property|Property|property|base08|
||Property facet|mandatory, relational, unlinked, minLength, maxLength, enumeration, pattern, maxInclusive, minInclusive||
|Perspective|Perspective|view, verbs, props, only, except, defaults, all roleverbs|base0D|
|Control|State|state|base0E|
||State transition|on entry [of <statekind>], on exit [of <statekind>]||
||Notification|notify [user]||
||Automatic action|do [for <user>]||
||Assignment|remove, delete, create, etc.||
|||action||
|Simple values|Boolean|true, false|base09|
||date|||
||number|||
||regular expression|||
||Property Range|String, Boolean, DateTime, Number||
|Expressions|Operators|either, both, binds, matches, and, or, not, exists, available, boundBy, binder, context|base0C|
|||filter…with||
|||>>=, >>, *, /, +, -, ==, >=, <, >=, >||
||Let|letA, letE||
|Variables|Standard variables|currentcontext, nofifieduser, origin, currentactor|base06|
|Verbs|Role verbs|Remove, Delete, Create, CreateAndFill, Fill, Unbind, RemoveFiller, Move|base0F|
||Property verbs|RemovePropertyValue, DeleteProperty, AddPropertyValue, SetPropertyValue, Consult||
|Meta|Meta|aspect, use, indexed|base05|

## Tokenizer scope names
Finally, we can assemble the table that gives each of our tokenizer rules (the entries under "patterns" in the `arc.tmLanguage.json` file) a value for its "name" property (taken from the default scope names). Note that there is considerable arbitrariness in this assignment, as we link on Base16 color variable names and these appear in more than one Textmate scope name.

|TOKENIZER RULE|BASE64|HIGHLIGHTJS SCOPE NAME|
|---|---|---|
|Context kinds|base0A|entity.name.class|
|Role kinds|base0B|entity.other.inherited-class|
|User role|base03|comment|
|Property|base08|entity.name.tag|
|Property facet|base08|entity.name.tag|
|Perspective|base0D|keyword.other.special-method|
|State|base0E|keyword|
|State transition|base0E|keyword|
|Notification|base0E|keyword|
|Automatic action|base0E|keyword|
|Assignment|base0E|keyword|
|Boolean|base09|constant|
|Date|base09|constant|
|Number|base09|constant|
|Property Range|base09|constant|
|Regular expression|base09|constant|
|Operators|base0C|support.function|
|Let|base0C|support.function|
|Standard Variables|base03|comment|
|Role verbs|base0F|entity.name.label|
|Property Verbs|base0F|entity.name.label|
|Meta|base05|keyword.operator|

# Development


## Package for distribution

## Releasing
Follow these steps:
