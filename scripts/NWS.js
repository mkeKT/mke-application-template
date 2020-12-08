var NWS = NWS || function () {
	return {
		initNamespace: function (namespace, f) {
			if (typeof(f) === 'undefined') {
				alert('Must define a class');
				return;
			}
			
			var o = this, i, j, d;
			d = namespace.split(".");
			for (j = (d[0] == "NWS") ? 1 : 0; j < d.length; ++j) {
				o[d[j]] = o[d[j]] || (j == d.length - 1 ? f() : {});
				o = o[d[j]];
			}

			return o;
		}
	};
} ();
