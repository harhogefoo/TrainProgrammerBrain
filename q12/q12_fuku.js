JsOsaDAS1.001.00bplist00�Vscript_�var n = 1
while (true) {
	
	var target = Math.sqrt(n).toString()
	var replace_target = target.replace(/\./g, '')
	var slice_target = replace_target.slice (0,10)
	
	if (Check(slice_target) == true) {
		console.log("answer : "+n)
		break
	}
	n++
}

function Check(target_array) {

	var result = true
	for (var i=0; i<10; i++) {

		if (target_array.indexOf(String(i)) == -1) {
			result = false
			break
		}
	}
	return result
}                              �jscr  ��ޭ