from flask import Flask, jsonify, send_from_directory, request

app = Flask(__name__)



room_list = [
    {
        "room_key": 1,
        "room_name": "Habitación doble Vista Jardín",
        "room_description": "Dos camas individuales, suelos de madera, balcón con vistas, plato de ducha, accesorios de baño, WiFi, secador de pelo, TV 32’’, calefacción, aire acondicionado, caja fuerte y mini bar con coste adicional.",
        "room_picture": "hab_vista_jardin.png",
        "available_occupancy": ["1-0-0", "1-1-0", "2-0-0"],
        "data_prices": [
            [{"target_occupancy": ["1-0-0"], "rate_id": "NRF", "rate_name": "Tarifa No Reembolsable", "price": 200.00}, {"rate_id": "FLEX", "rate_name": "Tarifa Flexible", "price": 250.00}],
            [{"target_occupancy": ["1-1-0", "2-0-0"], "rate_id": "NRF", "rate_name": "Tarifa No Reembolsable", "price": 300.00}, {"rate_id": "FLEX", "rate_name": "Tarifa Flexible", "price": 350.00}]
        ]
    },
    {
        "room_key": 2,
        "room_name": "Habitación doble Vista Mar",
        "room_description": "Maravillosas vistas al mar mediterráneo. Habitación con suelos de madera, plato de ducha, jacuzzi hidromasaje, amenities y secador de pelo. WiFi, TV 42’, calefacción, aire acondicionado, caja fuerte y mini bar sin coste adicional.",
        "room_picture": "hab_vista_mar.png",
        "available_occupancy": ["1-0-0", "2-0-0"],
        "data_prices": [
            [{"target_occupancy": ["1-0-0"], "rate_id": "NRF", "rate_name": "Tarifa No Reembolsable", "price": 400.00}, {"rate_id": "FLEX", "rate_name": "Tarifa Flexible", "price": 450.00}],
            [{"target_occupancy": ["2-0-0"], "rate_id": "NRF", "rate_name": "Tarifa No Reembolsable", "price": 550.00}, {"rate_id": "FLEX", "rate_name": "Tarifa Flexible", "price": 600.00}]
        ]
    }
]
@app.route('/static/<path:path>')
def send_static(path):
	return send_from_directory('static', path)

@app.route('/rooms', methods=['GET'])
def index():
	return jsonify({'rooms': room_list})
def get_rooms():
	adults = request.args.get('adults', type=int)
	children = request.args.get('children', type=int)
	babies = request.args.get('babies', type=int)
	max_price = request.args.get('max_price', type=float)
	filtered_rooms = filter(lambda room: 
        (adults is None or adults in room['available_occupancy']) and
        (children is None or children in room['available_occupancy']) and
        (babies is None or babies in room['available_occupancy']) and
        (max_price is None or any(price['price'] <= max_price for price_group in room['data_prices'] for price in price_group)),
        room_list)
	return jsonify({'rooms': list(filtered_rooms)})
	

if __name__ == '__main__':
	app.run(debug=True)