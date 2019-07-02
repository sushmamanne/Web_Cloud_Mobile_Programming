package com.example.loginapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    Button myLogin;
    EditText uname,pwd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        myLogin = (Button)findViewById(R.id.button2);
        uname = (EditText)findViewById(R.id.editText7);
        pwd = (EditText)findViewById(R.id.editText8);

        myLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(uname.getText().toString().equals("sushma") &&
                        pwd.getText().toString().equals("sushma")) {
                    Toast.makeText(getApplicationContext(),
                            "Logged In",Toast.LENGTH_SHORT).show();
                }else{
                    Toast.makeText(getApplicationContext(), "Invalid Credentials",Toast.LENGTH_SHORT).show();

                }
            }
        });
    }
}
