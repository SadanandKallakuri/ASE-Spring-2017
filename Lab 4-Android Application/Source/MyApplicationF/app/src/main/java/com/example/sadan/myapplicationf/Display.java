package com.example.sadan.myapplicationf;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

/**
 * Created by sadan on 2/15/2017.
 */

public class Display extends Activity {
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.display);
        String username = getIntent().getStringExtra("Username");
        TextView tv = (TextView) findViewById(R.id.TVusername);
        tv.setText(username);
    }
}