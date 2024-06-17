from sqlalchemy import create_engine, MetaData
from sqlalchemy_schemadisplay import create_schema_graph

# Datenbank-URL
database_url = 'postgresql://thor_user:zoRRo123@localhost/thor'

# Verbinde mit der Datenbank
engine = create_engine(database_url)
metadata = MetaData()
metadata.reflect(bind=engine)

# ER-Diagramm erzeugen und speichern
graph = create_schema_graph(
    metadata=metadata,
    show_datatypes=True,
    show_indexes=True,
    engine=engine  # Füge das engine-Argument hinzu
)
graph.write_png('erd_from_db.png')
