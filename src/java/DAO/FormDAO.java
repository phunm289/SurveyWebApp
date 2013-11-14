/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import DBUtility.DbUtility;
import Model.Forms;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Wise-SW
 */
public class FormDAO {

    private Connection conn = null;

    public FormDAO() {
    }

    public int insertForm(Forms form) {
        int generate_id = 0;
        String query = "INSERT INTO Forms(form_name,form_content,create_date) VALUES(?,?,?)";
        PreparedStatement pstmt = null;
        DbUtility db = new DbUtility();
        try {
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy HH:mm");
            Date d = new Date();
            String date = df.format(d);
            conn = db.getConn();
            String[] col_id = {"form_id"};
            pstmt = conn.prepareStatement(query, col_id);
            pstmt.setString(1, form.getForm_name());
            pstmt.setString(2, form.getForm_content());
            pstmt.setString(3, date);
            pstmt.execute();
            ResultSet rs = pstmt.getGeneratedKeys();
            while(rs.next()){
                generate_id = rs.getInt(1);
            }
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        } finally{
            db.closeConn(null, pstmt);
        }
        return generate_id;
    }
    
    public void deleteForm(int id){
        String query = "DELETE FROM Forms WHERE form_id = ?";
        PreparedStatement pstmt = null;
        DbUtility db = new DbUtility();
        try {
            conn = db.getConn();
            pstmt = conn.prepareStatement(query);
            pstmt.setInt(1, id);
            pstmt.execute();
        } catch (SQLException ex) {
            
        } finally{
            db.closeConn(null, pstmt);
        }
    }
    
    public ArrayList<Forms> getAllForm() {
        DbUtility db = new DbUtility();
        conn = db.getConn();
        Statement stmt = null;
        ResultSet rs = null;
        ArrayList<Forms> allForm = new ArrayList<>();
        try {
            String query = "SELECT * FROM Forms";
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while (rs.next()) {
                Forms uf = new Forms();
                uf.setForm_id(rs.getInt("form_id"));
                uf.setForm_name(rs.getString("form_name"));
                uf.setForm_content(rs.getString("form_content"));
                uf.setCreate_date(rs.getString("create_date"));
                allForm.add(uf);
            }
        } catch (SQLException ex) {
            Logger.getLogger(FormDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            db.closeConn(rs, stmt);
        }
        return allForm;
    }

    public Forms getFormById(int id) {
        DbUtility db = new DbUtility();
        conn = db.getConn();
        String query = "SELECT * FROM Forms WHERE form_id=?";
        PreparedStatement pstmt = null;
        
        ResultSet rs = null;
        Forms uf = new Forms();
        try {
            pstmt = conn.prepareStatement(query);
            pstmt.setInt(1, id);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                uf.setForm_id(rs.getInt("form_id"));
                uf.setForm_name(rs.getString("form_name"));
                uf.setForm_content(rs.getString("form_content"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(FormDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            db.closeConn(rs, pstmt);
        }
        return uf;
    }

    public Forms getFormByName(String name) {
        DbUtility db = new DbUtility();
        conn = db.getConn();
        String query = "SELECT * FROM Forms WHERE form_name=?";
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        Forms uf = new Forms();
        try {
            pstmt = conn.prepareStatement(query);
            pstmt.setString(1, name);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                uf.setForm_id(rs.getInt("form_id"));
                uf.setForm_name(rs.getString("form_name"));
                uf.setForm_content(rs.getString("form_content"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(FormDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            db.closeConn(rs, pstmt);
        }
        return uf;
    }

    
}
