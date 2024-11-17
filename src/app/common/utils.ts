export class Utils {
    public static transformTextToCamel(str: string | undefined): string | undefined {
		if (str === undefined)
			return str;
		
		let result: string = "";
		let init: boolean = true;
		
		for (let i = 0; i < str.length; i++) {
			const c = str.charAt(i);
			
			if (init) {
				result = result + c;
				init = false;
			} else if (c == ' ') {
                result = result + ' ';
				init = true;
			} else {
				result = result + c.toLocaleLowerCase('pt');
			}
		}

		return result;
	}
}