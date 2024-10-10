import psycopg2
from datetime import datetime

# Database connection
conn = psycopg2.connect(
    host="localhost",
    database="postgres",
    user="bob",
    password="admin@123"
)

cur = conn.cursor()

# Simulate fetched data
new_property = {
    'owner_name': 'David Johnson',
    'property_name': 'Riverside Residences',
    'total_units': 120,
    'filled_units': 100,
    'vacant_units': 20,
    'occupancy_rate': 83.33,
    'last_maintenance_date': datetime.now().strftime('%Y-%m-%d')
}

# Insert new property into database
cur.execute("""
    INSERT INTO properties (owner_name, property_name, total_units, filled_units, vacant_units, occupancy_rate, last_maintenance_date)
    VALUES (%s, %s, %s, %s, %s, %s, %s)
""", (new_property['owner_name'], new_property['property_name'], new_property['total_units'],
      new_property['filled_units'], new_property['vacant_units'], new_property['occupancy_rate'],
      new_property['last_maintenance_date']))

# Commit changes
conn.commit()

# Close connection
cur.close()
conn.close()

print("Data inserted successfully!")
