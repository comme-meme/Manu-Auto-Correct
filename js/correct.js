var textNode, walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null,false);
const rExp = new RegExp('Emmanuel Macron|'+
	'EmmanuelMacron|'+
	'M. le Président de la République|'+ // Keep the dot in case of "Mr" or "M."
	'le Président de la République|'+ // Put this one after, so that the one above matches first
	'Monsieur le Président de la République|'+
	'Monsieur le Président|'+
	'Président de la République française|'+
	'Président de la République|' +
	'Emmanuel Jean-Michel Frédéric Macron|' +
	'M. Macron', 'gi');

while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp, 'Manu');
}
