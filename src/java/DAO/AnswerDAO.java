/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import DBUtility.DbUtility;
import Model.Answers;
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
public class AnswerDAO {
    private Connection conn = null;
    
    public AnswerDAO(){
        
    }
    
    public void deleteAnswerByIndex(int index){
        String query = "DELETE FROM Answers WHERE [index] = ?";
        PreparedStatement pstmt = null;
        DbUtility db = new DbUtility();
        try {
            conn = db.getConn();
            pstmt = conn.prepareStatement(query);
            pstmt.setInt(1, index);
            pstmt.execute();
        } catch (SQLException ex) {
            
        } finally{
            db.closeConn(null, pstmt);
        }
    }
    
    public int insertAnswer(Answers answ){
        String query = "INSERT INTO Answers(ques_id,answer,[index]) VALUES(?,?,?)";
        int genarate_id = 0;
        PreparedStatement pstmt = null;
        DbUtility db = new DbUtility();
        try {
            String[] col_id = {"answ_id"};
            conn = db.getConn();
            pstmt = conn.prepareStatement(query, col_id);
            pstmt.setInt(1, answ.getQues_id());
            pstmt.setString(2, (!"".equals(answ.getAnswer())) ? answ.getAnswer() : "null");
            pstmt.setInt(3, answ.getIndex());
            pstmt.execute();
            ResultSet rs = pstmt.getGeneratedKeys();
            while(rs.next()){
                genarate_id = rs.getInt(1);
            }
        } catch (SQLException ex) {
            
        } finally{
            db.closeConn(null, pstmt);
        }
        return genarate_id;
    }
    
    public int getLastIndex(){
        int index = 0;
        String query = "SELECT MAX([index]) AS [Index] FROM Answers";
        DbUtility db = new DbUtility();
        conn = db.getConn();
        Statement stmt = null;
        ResultSet rs = null;
        try {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            if(rs.next()){
                index = rs.getInt("Index") + 1;
            } else{
                index = 1;
            }
        } catch (SQLException ex) {
            
        } finally{
            db.closeConn(rs,stmt);
        }
        
        
        return index;
    }
    
    public void deleteAnswer(int answ_id){
        String query = "DELETE FROM Answers WHERE answ_id = ?";
        PreparedStatement pstmt = null;
        DbUtility db = new DbUtility();
        try {
            conn = db.getConn();
            pstmt = conn.prepareStatement(query);
            pstmt.setInt(1, answ_id);
            pstmt.execute();
        } catch (SQLException ex) {
            
        } finally{
            db.closeConn(null, pstmt);
        }
    }
    
    public ArrayList<Integer> getIndex(int form_id){
        ArrayList<Integer> listIndex = new ArrayList<>();
        String query = "SELECT DISTINCT [index] FROM Answers a inner join Questions q on a.ques_id = q.ques_id inner join Forms f on q.form_id = f.form_id WHERE f.form_id = ?";
        DbUtility db = new DbUtility();
        conn = db.getConn();
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        try {
            pstmt = conn.prepareStatement(query);
            pstmt.setInt(1, form_id);
            rs = pstmt.executeQuery();
            while(rs.next()){
                listIndex.add(rs.getInt("Index"));
            }
        } catch (SQLException ex) {
            
        } finally{
            db.closeConn(rs,pstmt);
        }
        
        
        return listIndex;
    }
    
    public void deleteAnswerByQuesId(int ques_id){
        String query = "DELETE FROM Answers WHERE ques_id = ?";
        PreparedStatement pstmt = null;
        DbUtility db = new DbUtility();
        try {
            conn = db.getConn();
            pstmt = conn.prepareStatement(query);
            pstmt.setInt(1, ques_id);
            pstmt.execute();
        } catch (SQLException ex) {
            
        } finally{
            db.closeConn(null, pstmt);
        }
    }
    
    public ArrayList<Answers> getAllAnswers(){
        ArrayList<Answers> answers =  new ArrayList<>();
        DbUtility db = new DbUtility();
        conn = db.getConn();
        Statement stmt = null;
        ResultSet rs = null;
        try {
            String query = "SELECT * FROM Answers";
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while (rs.next()) {
                Answers answ = new Answers();
                answ.setAnsw_id(rs.getInt("answ_id"));
                answ.setQues_id(rs.getInt("ques_id"));
                answ.setAnswer(rs.getString("answer"));
                answ.setIndex(rs.getInt("index"));
                answers.add(answ);
            }
        } catch (SQLException ex) {
            
        } finally {
            db.closeConn(rs, stmt);
        }
        return answers;
    }
    
    public ArrayList<Answers> getAnswersByQuesId(int ques_id){
        ArrayList<Answers> answers =  new ArrayList<>();
        DbUtility db = new DbUtility();
        conn = db.getConn();
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        try {
            String query = "SELECT * FROM Answers WHERE ques_id=?";
            pstmt = conn.prepareStatement(query);
            pstmt.setInt(1, ques_id);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                Answers answ = new Answers();
                answ.setAnsw_id(rs.getInt("answ_id"));
                answ.setQues_id(rs.getInt("ques_id"));
                answ.setAnswer(rs.getString("answer"));
                answers.add(answ);
            }
        } catch (SQLException ex) {
            
        } finally {
            db.closeConn(rs, pstmt);
        }
        return answers;
    }
    
    public Answers getAnswersById(int answ_id){
        Answers answ = new Answers();
        DbUtility db = new DbUtility();
        conn = db.getConn();
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        try {
            String query = "SELECT * FROM Answers WHERE answ_id=?";
            pstmt = conn.prepareStatement(query);
            pstmt.setInt(1, answ_id);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                answ.setAnsw_id(rs.getInt("answ_id"));
                answ.setQues_id(rs.getInt("ques_id"));
                answ.setAnswer(rs.getString("answer"));
            }
        } catch (SQLException ex) {
            
        } finally {
            db.closeConn(rs, pstmt);
        }
        return answ;
    }
}
