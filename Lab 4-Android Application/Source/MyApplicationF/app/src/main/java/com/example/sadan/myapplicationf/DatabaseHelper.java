package com.example.sadan.myapplicationf;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.content.ContentValues;

/**
 * Created by sadan on 2/15/2017.
 */

public class DatabaseHelper extends SQLiteOpenHelper {

    public static final int DATABASE_VERSION = 1;
    public static final String DATABASE_NAME = "contacts.db";
    public static final String TABLE_NAME = "contacts";
    public static final String COLUMN_ID = "id";
    public static final String COLUMN_NAME = "name";
    public static final String COLUMN_EMAIL = "email";
    public static final String COLUMN_UNAME = "uname";
    public static final String COLUMN_PASS = "pass";
    SQLiteDatabase db;

    public static final String TABLE_CREATE = "create table contacts ( id integer primary key not null , " + "name text not null , email text not null , uname text not null , pass text not null);";

    public DatabaseHelper(Context context){
        super(context, DATABASE_NAME , null , DATABASE_VERSION);
    }


    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL(TABLE_CREATE);
        this.db=db;

    }
    public void insertContact(Contact c)
    {
        db = this.getWritableDatabase();
        ContentValues values= new ContentValues();

        String query="select * from contacts";
        Cursor cursor = db.rawQuery(query, null);
        int count= cursor.getCount();

        values.put(COLUMN_ID , count);
        values.put(COLUMN_NAME , c.getName());
        values.put(COLUMN_EMAIL , c.getEmail());
        values.put(COLUMN_UNAME , c.getUname());
        values.put(COLUMN_PASS , c.getPass());

        db.insert(TABLE_CREATE, null , values);
        db.close();
    }

    public String searchPass(String uname){
        db=this.getReadableDatabase();
        String query = "select unmae, pass from "+TABLE_NAME;
        Cursor cursor= db.rawQuery(query , null);
        String a, b;
        b= "not found";
        if(cursor.moveToFirst()){
            do{
                a = cursor.getString(0);
                if(a.equals(uname)){
                    b = cursor.getString(1);
                    break;
                }
            }
            while(cursor.moveToNext());
        }
        return b;
    }


    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        String query = " DROP IF TABLE EXISTS "+TABLE_NAME;
        db.execSQL(query);
        this.onCreate(db);

    }
}
