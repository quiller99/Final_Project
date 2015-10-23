

function regex(item){
	item = item.replace('http://www.w3.org/2002/07/owl#',' ');
	item = item.replace('days_','');
	item = item.replace('years_','');
	item = item.replace('_1_','');
	return item
}

$('[class=v_node]').on('click', function(e){
	
	var type = $(this).html();
	if (type === 'Birds'){var query = $('#get_bird').val();var target='#i_bir';var num_res=1;}
	else if (type === 'Reptiles'){var query = $('#get_rep').val();var target='#i_rep';var num_res=1}
	else if (type === 'Amphibians'){var query = $('#get_amp').val();var target='#i_amp';var num_res=1}
	else if (type === 'Mammals'){var query = $('#get_mam').val();var target='#i_mam';var num_res=3}

	var endpoint = 'http://localhost:5820/Beta/query';
	var format = 'JSON', reasoning;
	switch($(this).html()) {
		default:
			reasoning = true;
			break;
	}	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format, 'reasoning': reasoning}, function(json){
		try {
			var vars = json.head.vars;
			var db = [];
			$(target).html('Loading');
			//var ul = $('<ul></ul>');
			//ul.addClass('list-group');

			$.each(json.results.bindings, function(index,value){

				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
					var len = db.length;
					
					//console.log(v_value)
					v_value = v_value.replace('http://www.semanticweb.org/deveneybrehler/ontologies/2015/9/untitled-ontology-17#','');
					v_value = v_value.replace('http://www.semanticweb.org/quinten/ontologies/2015/9/untitled-ontology-44#',' ');
					v_value = v_value.replace('http://www.semanticweb.org/quinten/ontologies/untitled-ontology-48#',' ');
					v_value = v_value.replace('http://www.semanticweb.org/quinten/ontologies/external#',' ');
					v_value = v_value.replace('http://tinyurl.com',' http://tinyurl.com');					

					if (len === 0){
						db.push('<div class="results" id="res1" onclick="more(id,\''+v_value+'\')">'+v_value+'</div>');
					}
					else if (len === 1 && num_res > 1){
						db.push('<div class="results" id="res2" style="margin-top:25px;" onclick="more(id,\''+v_value+'\')">'+v_value+'</div>');
					}
					else if (len === 2 && num_res > 2){
						db.push('<div class="results" id="res3" style="margin-top:50px;" onclick="more(id,\''+v_value+'\')">'+v_value+'</div>');
					}
					else{
						db.push(v_value);
					}
					//console.log(db.slice(0,num_res))				
				});	
				
			});
			$(target).html(db.slice(0,num_res));
			for(var i=0;num_res>i;i++){
				var start = num_res+4*i;
				var end = start + 4;
				var lst = db.slice(start.end)
				if (i === 0){
					var temp1 = db.slice(start,end).sort()
				}
				if (i === 1){
					var temp2 = db.slice(start,end).sort()			
				}
				if (i === 2){
					var temp3 = db.slice(start,end).sort()
				}
			}
			var buff1 = [];
			var buff2 = [];
			var buff3 = [];
			
			for (i in temp1){
				buff1.push(regex(temp1[i]))
			}
			for (i in temp2){
				buff2.push(regex(temp2[i]))
			}
			for (i in temp3){
				buff3.push(regex(temp3[i]))
			}
			//console.log(buff1,buff2,buff3)
			$('#buffer1').html(buff1);
			$('#buffer2').html(buff2);
			$('#buffer3').html(buff3);
		} catch(err) {
			$(target).html(err);
		}
	});	
});

$('[class=inv_node]').on('click', function(e){
	
	var type = $(this).html();
	if (type === 'Molluscs'){var query = $('#get_mol').val();var target='#i_mol';var num_res=1}

	var endpoint = 'http://localhost:5820/Beta/query';
	var format = 'JSON', reasoning;
	switch($(this).html()) {
		default:
			reasoning = true;
			break;
	}	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format, 'reasoning': reasoning}, function(json){
		try {
			var vars = json.head.vars;
			var db = [];
			$(target).html('Loading');

			$.each(json.results.bindings, function(index,value){

				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
					var len = db.length;
					
					v_value = v_value.replace('http://www.semanticweb.org/deveneybrehler/ontologies/2015/9/untitled-ontology-17#','');
					v_value = v_value.replace('http://www.semanticweb.org/quinten/ontologies/2015/9/untitled-ontology-44#',' ');
					v_value = v_value.replace('http://www.semanticweb.org/quinten/ontologies/untitled-ontology-48#',' ');
					v_value = v_value.replace('http://www.semanticweb.org/quinten/ontologies/external#',' ');
					v_value = v_value.replace('http://tinyurl.com',' http://tinyurl.com');					

					if (len === 0){
						db.push('<div class="results" id="res1" onclick="more(id,\''+v_value+'\')">'+v_value+'</div>');
					}
					else if (len === 1 && num_res > 1){
						db.push('<div class="results" id="res2" style="margin-top:25px;" onclick="more(id,\''+v_value+'\')">'+v_value+'</div>');
					}
					else if (len === 2 && num_res > 2){
						db.push('<div class="results" id="res3" style="margin-top:50px;" onclick="more(id,\''+v_value+'\')">'+v_value+'</div>');
					}
					else{
						db.push(v_value);
					}			
				});	
				
			});
			$(target).html(db.slice(0,num_res));
			for(var i=0;num_res>i;i++){
				var start = num_res+4*i;
				var end = start + 4;
				var lst = db.slice(start.end)
				if (i === 0){
					var temp1 = db.slice(start,end).sort()
				}
				if (i === 1){
					var temp2 = db.slice(start,end).sort()			
				}
				if (i === 2){
					var temp3 = db.slice(start,end).sort()
				}
			}
			var buff1 = [];
			var buff2 = [];
			var buff3 = [];
			
			for (i in temp1){
				buff1.push(regex(temp1[i]))
			}
			for (i in temp2){
				buff2.push(regex(temp2[i]))
			}
			for (i in temp3){
				buff3.push(regex(temp3[i]))
			}
			$('#buffer1').html(buff1);
			$('#buffer2').html(buff2);
			$('#buffer3').html(buff3);
		} catch(err) {
			$(target).html(err);
		}
	});	
});

$('[class=inv_sub_node]').on('click', function(e){
	
	var type = $(this).html();
	if (type === 'Arachnids'){var query = $('#get_ara').val();var target='#i_ara';var num_res=1;}
	else if (type === 'Insects'){var query = $('#get_ins').val();var target='#i_ins';var num_res=1}


	var endpoint = 'http://localhost:5820/Beta/query';
	var format = 'JSON', reasoning;
	switch($(this).html()) {
		default:
			reasoning = true;
			break;
	}	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format, 'reasoning': reasoning}, function(json){
		try {
			var vars = json.head.vars;
			var db = [];
			$(target).html('Loading');

			$.each(json.results.bindings, function(index,value){

				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
					var len = db.length;
					
					//console.log(v_value)
					v_value = v_value.replace('http://www.semanticweb.org/deveneybrehler/ontologies/2015/9/untitled-ontology-17#','');
					v_value = v_value.replace('http://www.semanticweb.org/quinten/ontologies/2015/9/untitled-ontology-44#',' ');
					v_value = v_value.replace('http://www.semanticweb.org/quinten/ontologies/untitled-ontology-48#',' ');
					v_value = v_value.replace('http://www.semanticweb.org/quinten/ontologies/external#',' ');
					v_value = v_value.replace('http://tinyurl.com',' http://tinyurl.com');					

					if (len === 0){
						db.push('<div class="results" id="res1" onclick="more(id,\''+v_value+'\')">'+v_value+'</div>');
					}
					else if (len === 1 && num_res > 1){
						db.push('<div class="results" id="res2" style="margin-top:25px;" onclick="more(id,\''+v_value+'\')">'+v_value+'</div>');
					}
					else if (len === 2 && num_res > 2){
						db.push('<div class="results" id="res3" style="margin-top:50px;" onclick="more(id,\''+v_value+'\')">'+v_value+'</div>');
					}
					else{
						db.push(v_value);
					}
					//console.log(db.slice(0,num_res))				
				});	
				
			});
			$(target).html(db.slice(0,num_res));
			for(var i=0;num_res>i;i++){
				var start = num_res+4*i;
				var end = start + 4;
				var lst = db.slice(start.end)
				if (i === 0){
					var temp1 = db.slice(start,end).sort()
				}
				if (i === 1){
					var temp2 = db.slice(start,end).sort()			
				}
				if (i === 2){
					var temp3 = db.slice(start,end).sort()
				}
			}
			var buff1 = [];
			var buff2 = [];
			var buff3 = [];
			
			for (i in temp1){
				buff1.push(regex(temp1[i]))
			}
			for (i in temp2){
				buff2.push(regex(temp2[i]))
			}
			for (i in temp3){
				buff3.push(regex(temp3[i]))
			}
			console.log(buff1,buff2,buff3)
			$('#buffer1').html(buff1);
			$('#buffer2').html(buff2);
			$('#buffer3').html(buff3);
		} catch(err) {
			$(target).html(err);
		}
	});	
});