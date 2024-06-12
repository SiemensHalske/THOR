from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import declarative_base
from sqlalchemy.types import UserDefinedType
from eralchemy import render_er
import warnings
from sqlalchemy.exc import SAWarning

# Benutzerdefinierter Typ für Geography


class Geography(UserDefinedType):
    def get_col_spec(self):
        return "GEOGRAPHY"

    def bind_expression(self, bindvalue):
        return bindvalue

    def column_expression(self, col):
        return col


# Ignoriere SQLAlchemy-Warnungen
warnings.filterwarnings("ignore", category=SAWarning,
                        message="Did not recognize type 'geography' of column 'location'")


def process_metadata(engine):
    Base = declarative_base()
    Base.metadata.reflect(engine, extend_existing=True)

    # Entferne die problematischen Spalten
    for table in Base.metadata.tables.values():
        for column in list(table.columns):
            if isinstance(column.type, Geography):
                print(f"Removing column {column.name} from table {table.name}")
                table.columns.remove(column)

    return Base.metadata


# Verbindung zur Datenbank herstellen und Metadaten verarbeiten
db_uri = "postgresql+psycopg2://thor_user:zoRRo123@localhost/thor_db"
engine = create_engine(db_uri)
metadata = process_metadata(engine)

# ER-Diagramm erstellen
render_er(db_uri, 'er_diagram.png')
