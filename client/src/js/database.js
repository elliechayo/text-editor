import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
  try {
    // open the database using name and id
    const db = await openDB("jate", 1);
    // upsert the content
    await db.put("jate", { content, id: 1 });
  } catch (error) {
    console.log(error);
  }
};



export const getDb = async () => {
  try {
    const db = await openDB("jate", 1);
    const data = await db.get("jate", 1);
    db.close();
    // check if data exists
    if (!data) {
      console.log("No data from DB");
      return "";
    }
    // check if data.content exists,
    // if true, return it
    // else return empty string
    if (data.content) {
      return data.content;
    } else {
      return "";
    }
  } catch (error) {
    console.log(error);
  }
};

initdb();

