frappe.listview_settings['Geslog Material Return'] = {
	add_fields: [ "status"],
	get_indicator: function(doc) {
        return geslog.list.get_status_indicator(doc)
	}
};