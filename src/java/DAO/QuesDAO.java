/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import DBUtility.DbUtility;
import Model.Questions;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

/**
 *
 * @author Wise-SW
 */
public class QuesDAO {
    private Connection conn = null;

    public QuesDAO() {
    }
    
    public int insertQues(Questions ques){
        int generate_id = 0;
        String query = "INSERT INTO Questions(form_id,question) VALUES(?,?)";
        PreparedStatement pstmt = null;
        DbUtility db = new DbUtility();
        try {
            conn = db.getConn();
            String[] col_id = {"ques_id"};
            pstmt = conn.prepareStatement(query,col_id);
            pstmt.setInt(1, ques.getForm_id());
            pstmt.setString(2, ques.getQuestion());
            pstmt.execute();
            ResultSet rs = pstmt.getGeneratedKeys();
            while(rs.next()){
                generate_id = rs.getInt(1);
            }
        } catch (SQLException ex) {
            
        } finally{
            db.closeConn(null, pstmt);
        }
        return generate_id;
    }
    
    public void deleteQuestion(int id){
        String query = "DELETE FROM Questions WHERE ques_id = ?";
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
    
    public void deleteQuestionByFormId(int id){
        String query = "DELETE FROM Questions WHERE form_id = ?";
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
    
    public ArrayList<Questions> getAllQues() {
        DbUtility db = new DbUtility();
        conn = db.getConn();
        Statement stmt = null;
        ResultSet rs = null;
        ArrayList<Questions> questions = new ArrayList<>();
        try {
            String query = "SELECT * FROM Questions";
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while (rs.next()) {
                Questions ques = new Questions();
                ques.setForm_id(rs.getInt("form_id"));
                ques.setQues_id(rs.getInt("ques_id"));
                ques.setQuestion(rs.getString("question"));
            }
        } catch (SQLException ex) {
            
        } finally {
            db.closeConn(rs, stmt);
        }
        return questions;
    }

    public Questions getQuesById(int id) {
        DbUtility db = new DbUtility();
        conn = db.getConn();
        String query = "SELECT * FROM Questions WHERE ques_id=?";
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        Questions ques = new Questions();
        try {
            pstmt = conn.prepareStatement(query);
            pstmt.setInt(1, id);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                ques.setForm_id(rs.getInt("form_id"));
                ques.setQues_id(rs.getInt("ques_id"));
                ques.setQuestion(rs.getString("question"));
            }
        } catch (SQLException ex) {
            
        } finally {
            db.closeConn(rs, pstmt);
        }
        return ques;
    }
    
    public ArrayList<Questions> getQuesByFormId(int form_id) {
        DbUtility db = new DbUtility();
        conn = db.getConn();
        String query = "SELECT * FROM Questions WHERE form_id=?";
        PreparedStatement pstmt = null;
        
        ResultSet rs = null;
        ArrayList<Questions> questions = new ArrayList<>();
        try {
            pstmt = conn.prepareStatement(query);
            pstmt.setInt(1, form_id);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                Questions ques = new Questions();
                ques.setForm_id(rs.getInt("form_id"));
                ques.setQues_id(rs.getInt("ques_id"));
                ques.setQuestion(rs.getString("question"));
                questions.add(ques);
            }
        } catch (SQLException ex) {
            
        } finally {
            db.closeConn(rs, pstmt);
        }
        return questions;
    }
}
